const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors')

const keys = require("./config/keys");
const { handleError } = require('./middlewares/error')

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });

const app = express();
app.use(morgan("dev"), cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    handleError(err, res);
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

require("./config/routes")(app);

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log("Action taking place on port", 3100);
});
