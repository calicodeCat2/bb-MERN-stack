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
    console.log(req.params);
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
      res.send(user);
      // throw new ErrorHandler(501, "Registration failed!");
    });
  },

  login: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = User.findOne({ email: email }).then((result) => {
      let user = result;
      bcrypt.compare(password, user.password, (err, hash) => {
        if (hash) {
          let { ...authUser } = user;
          // console.log("authUser", authUser);

          jwt.sign(authUser, wombat, (err, token) => {
            if (err) throw new ErrorHandler(401, "Token not created.");
            res.json({
              message: "Authenticated",
              id: authUser._doc._id,
              firstName: authUser._doc.firstName,
              lastName: authUser._doc.lastName,
              username: authUser._doc.username,
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
