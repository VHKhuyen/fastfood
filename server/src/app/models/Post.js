const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:Schema.Types.String,
        ref:'users',
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('posts', Post)