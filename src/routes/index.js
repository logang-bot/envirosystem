const router = require("express").Router();
const user = require("../controllers/user");

router.post("/user/registro", user.signUp);

module.exports = router;
