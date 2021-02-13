"use strict";

const { user } = require("../models");
const passport = require("passport");
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

ctrl.updateUser = async (req, res) => {
  const {
    name,
    lastnameF,
    lastmaneM,
    email,
    charge,
    username,
    phone,
    ci,
    address,
    //confirm_password,
  } = req.body;
  const idUser = req.params.id;

  if (email) {
    const usermail = await user.findOne({ email: email });
    console.log(usermail);

    if (usermail) {
      if (usermail.id != req.params.id) {
        console.log("email en uso");
        return res.send({ message: "Error: El email ya esta en uso" });
      }
    }
  }

  if (!/\w+\@\w+\.\w{2,3}/.test(email)) {
    console.log("el email no es valido");
    return res.send({ message: "Email no valido" });
  }

  /*if (password != confirm_password) {
    console.log("Password incorrecto");
    return res.send({ message: "Password incorrecto" });
  }*/

  const errors = [];

  //if (!name) errors.push("el nombre esta vacio");
  //if (!lastnameF) errors.push("el apellido paterno esta vacio");
  //if (!lastmaneM) errors.push("el apellido materno esta vacio");
  if (!email) {
    errors.push("el email esta vacio");
  }
  //if (!charge) errors.push("el cargo esta vacio");
  if (!username) {
    errors.push("el usuario esta vacio");
  }
  //if (!phone) errors.push("el telefono esta vacio");
  //if (!ci) errors.push("el CI esta vacio");
  //if (!address) errors.push("la direccion esta vacia");
  if (errors.length > 0) {
    console.log(errors);
    return res.send({ message: "Existen campos vacion" });
  } else {
    /*const userEdit = new user({
      //name,
      //lastnameF,
      //lastnameM,
      email,
      //charge,
      username,
      //phone,
      //ci,
      //address,
      //confirm_password,
    });*/
    console.log(req.user.id);
    await user.findByIdAndUpdate(req.user.id, { email, username });
    res.send("Actualizado correctamente");
  }
};

ctrl.updateUserPass = async (req, res) => {
  const { password, confirm_password } = req.body;
  const userId = req.user.id;
  if (confirm_password != password) {
    console.log("Password incorrecto");
    return res.send({ message: "El password es incorrecto" });
  } else {
    const auxPass = new user({ password });
    //password = auxPass.encryptPass(password);
    await user.findByIdAndUpdate(userId, {
      password: await auxPass.encryptPass(password),
    });
    return res.send("Password actualizado");
  }
};
ctrl.login = passport.authenticate("local", {
  successRedirect: "/default",
  failureRedirect: "/",
});

module.exports = ctrl;
