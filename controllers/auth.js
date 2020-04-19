const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const { handleError, ErrorHandler } = require("../middlewares/error");

const User = mongoose.model("users");
const wombat = require("../wombat");

module.exports = {
  hello: (req, res) => {
    res.send("See you soon, Looney Tune!");
  },

  getUser: (req, res, next) => {
    const id = req.params.id;
    const user = User.findById({ _id: id })
      .then((result) => {
        const user = result;
        res.send(user);
      })
      .catch(() => {
        throw new ErrorHandler(501, "Failed to get User.");
      });
  },

  register: async (req, res, next) => {
    const { firstName, lastName, username, email } = req.body;
    const password = req.body.password;
    bcrypt.hash(password, 12).then((hashedPassword) => {
      const user = new User({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
      });
      user.save();
      console.log(user);
      
      res.send(user);
      // throw new ErrorHandler(501, "Registration failed!");
    });
  },

  login: (req, res) => {
    console.log('login', req.body);
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email }).then((result) => {
      let user = result;
      bcrypt.compare(password, user.password, (err, hash) => {
        if (hash) {
          let { ...authUser } = user;
          console.log("authUser", authUser);

          jwt.sign(authUser, wombat, (err, token) => {
            if (err) throw new ErrorHandler(401, "Token not created.");
            const reply = res.json({
              message: "Authenticated",
              id: authUser._doc._id,
              user: authUser._doc,
              token
            });
          })
        } else {
          throw new ErrorHandler(401, "Authentication Failed.");
        }
      });
    });
  },
};
