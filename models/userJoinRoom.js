const mongoose = require('mongoose');


const listuserRoom = new mongoose.Schema({
     nameuser:{
        type:String,
        required:true
    },
    namaAndroom:{
        type:String,
        required:true
    },
    roomUser:{
        type:String,
        required:true
    },
    imguser:{
        type:String,
    },
    idRoom:{
        type:String,
        default:"this is admin"
    },
    admin:false
})


const listuserinroom = mongoose.model("listUserinRoom",listuserRoom);
module.exports = listuserinroom;