const mongoose = require('mongoose')

const commetschema = mongoose.Schema({
    userId:{
        type: String ,
        require: true,
        
    },
    videoid: {
        type: String,
        require: true,
    },
    description : {
        type: String,
        require: true,
    }
},{timestamps: true}); 

module.export =  mongoose.model("comments",commentschema)