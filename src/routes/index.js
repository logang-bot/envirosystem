"use strict";
const router = require("express").Router();
const user = require("../controllers/user");
const auth = require("../helpers/auth");

router.get("/default", (req, res) => {
  res.send("Logged in!!");
});

router.get("/", (req, res) => {
  res.send("index");
});

router.post("/user/registro", user.signUp);
router.put("/user/editar", auth.isAuthenticated, user.updateUser);
router.put("/user/editarPass", auth.isAuthenticated, user.updateUserPass);

router.post("/user/login", user.login);

module.exports = router;
