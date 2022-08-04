const {} = require("../controller/user.js")
const {signup} = require("../controller/auth.js")
const express = require('express')

const routes = express.Router();

//CREATE USER
routes.post("/signup",signup)
//SIGN IN
routes.post("/signin",)
//GOOGLE AUTHENTICATION
routes.post("/google",)
module.exports = routes 