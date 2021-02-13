'use strict';
const express = require("express");
const app = express();
const routes = require("../routes");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");

require("../config/passport");

app.set("port", process.env.PORT || 8000);

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.listen(app.get("port"), () => {
  console.log("servidor en puerto", app.get("port"));
});

app.use(session({
  secret: 'theSecret',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

module.exports = app;
