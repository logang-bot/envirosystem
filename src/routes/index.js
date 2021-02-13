'use strict';
const router = require("express").Router();
const user = require("../controllers/user");

router.get("/default", (req, res) => {
    res.send("Logged in!!");
});

router.get('/', (req,res)=>{
    res.send('index')
})

router.post("/user/registro", user.signUp);

router.post("/user/login", user.login)

module.exports = router;
