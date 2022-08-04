const mongoose = require('mongoose')

const userschema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique:true
    },

    email:{
        type: String,
        require: true,
        unique:true
    },
    password :{
        type: String,
        require: true
        
    },
    img:{
        type: String,
        
    },
    subscribers:{
        type: Number,
        default:0
    },
    subscribedUsers:{
        type: [String]
        
    }
},{timestamps: true}); 

module.export = mongoose.model("users",userschema)