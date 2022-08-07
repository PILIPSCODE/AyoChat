const mongoose = require('mongoose');


const chatmsg = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    pesan:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    iduser:{
        type:String,
        required:true
    },
})


const Riwchat = mongoose.model("chatuser",chatmsg);
module.exports = Riwchat;