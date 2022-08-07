const express = require('express');
const roomModel = require('./room');
const router = express.Router();
const Riwchat = require('./riwayatchat')
const listuserinroom = require('../models/userJoinRoom')
const {User} = require('../models/users')
const auth = require('../midelware/asu')




//  profile

router.get('/Listuser',auth,(req,res) => {
   User.find()
   .then(users => res.json(users))
   .catch(err => res.status(400).json("eror:"+err))
 })

 router.delete("/profile",auth,async (req,res) => {
    User.findByIdAndDelete(req.user._id)
    .then(() => {res.json('user deleted')})
    .catch(err => res.status(400).json("eror:"+err))
 })
 router.get("/profile",auth,async (req,res) => {
    const user = await User.findById(req.user._id)
    res.json({
    id:user._id,
    name:user.name,
    email:user.email
    })
 })
 router.get("/Listuserchato", (req,res) => {
   listuserinroom.find((err,data) => {
      if(err) console.log(err)
      res.json(data)
   })
 })
 router.get("/Listchato", (req,res) => {
   Riwchat.find((err,data) => {
      if(err) console.log(err)
      res.json(data)
   })
 })

router.get("/ListRoom", (req,res) => {
   roomModel.find((err,data) => {
      
      if(err) console.log(err)
      res.json(data)
   })
 })

 router.put('/ListRoom/:id' , (req,res) => {
   roomModel.findOneAndUpdate({
      _id : req.params.id
   },req.body,{
      new: true
   }, (err,data) => {
      if(err) console.log(err)
      res.json(data)
   })
})


//  get with id
router.get("/:id", (req,res) => {
   roomModel.findById(req.params.id,(err,data) => {
      if(err) console.log(err)
      res.json(data).status(200)
      
   })
 })

 
router.post("/room", async(req,res) => {

    const createRoom = await roomModel.findOne({room:req.body.room});
    if(createRoom)
    return res.status(409).send({message:"can't same room name"})

    const taks = new roomModel(req.body)
    taks.save((err,data) => {
       if(err) console.log(err)
       res.json(data)
    })
 })

router.post("/findRoom", (req,res) => {
  roomModel.findOne({room:req.body.room}).then((e) => {
     if(e){
         res.json({
            room:e
         })
      }else{

         res.status(401).send({ message: `Room name ${req.body.room} not Found` });
      }
   }).catch((e) => {
      console.log(e)
   })
 })
   
 router.delete('/deleteRoom/:id',(req,res) => {
   roomModel.findByIdAndDelete(req.params.id,(err,data) => {
      if(err) console.log(err)
      res.send('room deleted')
   })
 })


 module.exports = router;