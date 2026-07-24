const express = require("express");
const router = express.Router();
const {userSignUp,userSignIn,userSignOut} = require("../controllers/userController")
const protect = require("../middleware/authMiddleware")

router.get("/",(req,res)=>{
    res.status(200).send("Router is working")
})

router.get("/profile",protect,(req,res)=>{
    res.json({
        message:"Profile Loaded",
        user : req.user
    })
})
router.post("/Signup",userSignUp)
router.post("/SignIn",userSignIn)

module.exports = router