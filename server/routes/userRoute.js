const express = require("express");
const router = express.Router();
const {userSignUp} = require("../controllers/userController")

router.get("/",(req,res)=>{
    res.status(200).send("Router is working")
})

router.post("/Signup",userSignUp)

module.exports = router