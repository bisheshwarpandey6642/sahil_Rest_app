const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:Number,
        required: true
    },
    vegetarian:{
        type:Boolean,
        default: true
    }
})

module.exports = mongoose.model('PostSchema', PostSchema)