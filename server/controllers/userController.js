const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const user = require("../models/user")

const generatetoken = (id) =>{
    return jwt.sign({id},
    process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
}

const userSignUp = async(req,res) =>{
    try{
        const {name,email,password}=req.body
        const userEmailExist = await user.findOne({email})
        const userNameExist = await user.findOne({name})

        if(userEmailExist){
            return res.status(400).json({
                message:"user already exist"
            })
        }
        if(userNameExist){
            return res.status(400).json({
                message:"UserName already Taken"
            })
        }

        const hashedPassword = await bcrypt.hash(password,12)
        const newUser = await user.create({
            name,
            email,
            password:hashedPassword
        })

        const token = generatetoken(newUser._id)

        res.cookie("token",token, {
            httpOnly : true,
            secure : false,
            sameSite : "lax",
            maxAge : 7*24*60*60*1000
        })

        res.status(201).json({
            _id : newUser._id,
            name : newUser.name,
            email : newUser.email,
        })
    }
    catch(error){
        return res.status(401).json({
            message:error.message
        })
    }
}

const userSignIn = async(req,res) =>{
  try{
    const {email,password} = req.body
    const userExist = await user.findOne({email})

    if(!user){
        return res.status(400).json({
            message : "Inavalid Email or Password"
        })
    }

    const isMatch = await bcrypt.compare(password,userExist.password)

    if(!isMatch){
        return res.status(400).json({
            message : "Invalid Email or Password"
        })
    }

    const token = generatetoken(userExist._id)

    res.cookie("token",token, {
        httpOnly : true,
        secure : false,
        sameSite : "lax",
        maxAge : 7*24*60*60*1000
    })

    return res.status(200).json({
        message: "lgin Sucessfull",
        _id : userExist._id,
        email : userExist.email,
    })
  }
  catch(error){
    return res.status(400).json({
        message : error.message
    })
  }

}

module.exports = {userSignUp,userSignIn}