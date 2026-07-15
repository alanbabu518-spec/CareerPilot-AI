const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const user = require("../models/user")
const { create } = require("node:domain")

const generatetoken = (id) =>{
    return jwt.sign({id},
    process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
}

const userSignUp = async(req,res) =>{
    try{
        const {name,email,password}=req.body
        const userExist = await user.findOne({email})

        if(userExist){
            return res.status(400).json({
                message:"user already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password,12)
        const newUser = await user.create({
            name,
            email,
            password:hashedPassword
        })

        res.status(201).json({
            _id : newUser._id,
            name : newUser.name,
            email : newUser.email,
            token : generatetoken(newUser._id)

        })
    }
    catch(error){
        return res.status(401).json({
            message:error.message
        })
    }
}

module.exports = {userSignUp}