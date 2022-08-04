const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()
const userRoutes = require("./routes/users.js")
const videoRoutes = require("./routes/videos.js")
const commentRoutes = require("./routes/comments.js")
const authRoutes = require("./routes/auth.js")


const connectdb = async () =>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/videos", videoRoutes)

app.use((err,req,res,next)=>{
    const status=err.status || 500;
    const message=err.message ||"Something went wrong!";
    return res.status(status).json({
      success:false,
      status,
      message
  })
   })
                         

app.listen(8800,()=>{
    connectdb()
    console.log("connected")
})

