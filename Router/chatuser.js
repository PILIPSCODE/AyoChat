const express = require('express');
const router = express.Router();
const Riwchat = require('../models/riwayatchat')

// chat user

  router.post("/Listchat", (req,res) => {
    const taks = new Riwchat(req.body)
    taks.save((err,data) => {
       if(err) console.log(err)
       res.json(data)
    })
 })
 
  router.delete('/delete/chat/:id',(req,res) => {
    Riwchat.findByIdAndDelete(req.params.id,(err,data) => {
      if(err) console.log(err)
      res.json(data)
    })
  })


 router.post('/chatuser/deleted',(req,res) => {
    Riwchat.deleteMany({room:req.body.room},(err,data) => {
      if(err) console.log(err)
      res.send('deleted')
    })
 })


 module.exports = router