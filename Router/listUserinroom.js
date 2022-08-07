const express = require('express');
const router = express.Router();
const listUserroom = require('../models/userJoinRoom')
const {User} = require('../models/users')


router.get("/SearchUser",(req,res) => {
   User.find((err,data) => {
    if(err) console.log(err)
    res.json(data)
  })
})

router.post("/FindUser",(req,res) => {
 User.find({name:req.body.name},(err,data)=> {
    if(err)console.log(err)
    res.json(data)
 })
})

router.post("/Listuserchat", async(req,res) => {

   
   const user = await listUserroom.findOne({ namaAndroom: req.body.namaAndroom});
   
   if (user)
      return res
         .status(409)
         .send({ message: "User is Joined" });

   const cekjmlh = await listUserroom.find({roomUser: req.body.roomUser})


   if(cekjmlh.length == 3)
      return res.status(409).send({message :"grup is full"})
        


    const taks = new listUserroom(req.body)
    taks.save((err,data) => {
       if(err) console.log(err)
       res.json(data)
    })
 })




 router.delete("/Listuserchat/:id",(req,res) => {
   listUserroom.findByIdAndDelete(req.params.id, (err,data) => {
      if(err) console.log(err)
      res.send('deleted')
   })
})

router.post('/Listuserchat/delete',(req,res) => {
   listUserroom.deleteMany({roomUser: req.body.roomUser},(err,data) => {
      if(err) console.log(err)
      res.send('deleted many')
   })
})
 module.exports = router