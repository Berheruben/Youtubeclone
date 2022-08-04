
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


 const signup = async (req,res,next)=>{
  
    
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password , salt);
        const newUser = new users({ ...req.body, password: hash})
        await newUser.save()
        
        res.status(200).send("user has been created")
     } catch (err) {
         next(err)
     }
     
}

module.exports = {
    signup
}