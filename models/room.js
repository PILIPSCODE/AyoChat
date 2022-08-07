const mongoose = require('mongoose');


const Room = new mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    admin:{
        type:String,
        default:"milik pemerintah"
    }
})


const roomModel = mongoose.model("room",Room);
module.exports = roomModel;