const mongoose = require('mongoose')

const videoschema = mongoose.Schema({
    userId:{
        type: String ,
        require: true,
        
    },
    title:{
        type: String ,
        require: true,
        
    },
    description:{
        type: String ,
        require: true,
        
    },
    imgUrl:{
        type: String ,
        require: true,
        
    },
    videoUrl:{
        type: String ,
        require: true,
        
    },
   views:{
        type: Number,
        default:0,
        
    },
    tags:{
         type:[String],
         default:[]
    },
    like: {
        type:[String],
         default:[]
        
    },
    dislike: {
        type:[String],
         default:[]
        
    },
},{timestamps: true}); 

module.export = mongoose.model("videos",videoschema)