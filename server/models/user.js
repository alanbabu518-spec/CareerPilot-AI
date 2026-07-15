const mongoose = require("mongoose")
const { timeStamp } = require("node:console")
const { type } = require("node:os")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },

    email : {
        type:String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

},
{
    timeStamp : true
}
)

module.exports = mongoose.model("user",userSchema)