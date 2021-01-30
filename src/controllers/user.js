"use strict";

const { user } = require("../models");
const ctrl = {};

ctrl.signUp = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;
  const errors = [];
  if (username.length <= 0)
    errors.push({ text: "por favor insertar un nombre" });
  if (email.length <= 0) errors.push({ text: "por favor insertar un email" });
  if (password.length <= 0)
    errors.push({ text: "por favor insertar una contrasenia" });
  if (password !== confirm_password)
    errors.push({ text: "las contrasenia no coinciden" });
  if (errors.length > 0) {
    return res.send(errors);
  } else {
    const emailUser = await user.findOne({ email: email });
    if (emailUser) {
      res.status(500).json({ message: "este correo ya esta registrado" });
    } else {
      const newUser = new user({ username, email, password });
      newUser.password = await newUser.encryptPass(password);
      await newUser.save();
      res.status(200).json({ message: "estas registrado" });
      console.log(newUser);
    }
  }
};

module.exports = ctrl;
