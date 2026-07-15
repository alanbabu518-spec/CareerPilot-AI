const express = require("express")
const cors = require("cors")
const connectdb  = require("./config/db")
const dotenv = require("dotenv")
dotenv.config()
const UserRoute = require("./routes/userRoute")

connectdb();
console.log("Database is Connected")

const app = express();
app.use(express.json())
app.use(cors())

app.use("/api/users",UserRoute)

app.get("/",(req,res)=>{
    res.send("CareerPilot api is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`The Server Is Running on PORT ${PORT}`)
})
