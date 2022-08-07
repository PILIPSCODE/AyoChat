const mongoose = require('mongoose');



const roomVsolo = mongoose.Schema({
    nama1:{
        require:true,
        type:String,   
    },
    nama2:{
        require:true,
        type:String,   
    },
    roomVsolo:{
        require:true,
        type:String,   
    },
    nama1nama2:{
        require:true,
        type:String,
    }
})

const roomVsoloo = mongoose.model("roomVsolo",roomVsolo)

module.exports = roomVsoloo;