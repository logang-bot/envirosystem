const router = require("express").Router();
const user = require("../controllers/user");

router.post("/user/registro", user.signUp);
router.put("/user/editar", user.updateUser);
router.put("/user/editarPass", user.updateUserPass);
module.exports = router;
