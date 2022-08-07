const express = require('express');
const router = express.Router();

const roomVsoloo = require('../models/roomModelVSolo')


router.get('/roomVsolo',(req,res) => {
    roomVsoloo.find((err,data)=> {
      if(err)console.log(err)
      res.json(data)
    })
})
router.get('/roomVsolo/:id',(req,res) => {
    roomVsoloo.findById(req.params.id,(err,data) => {
      if(err)console.log(err)
      res.json(data)
    })
})

router.post('/roomVsolo',async(req,res) => {


    let user = await roomVsoloo.findOne({roomVsolo:req.body.roomVsolo})
    if(user)
    return res
    .status(409)
    .send("msg: aokowkowkokok")
    const nama1 = req.body.nama1
    const nama2 = req.body.nama2
    let nama1nama2 = `${nama1}${nama2}`
    let nama2nama1 = `${nama2}${nama1}`
    let hasilauten1 = ''
    let hasilauten2 = ''
    await roomVsoloo.findOne({nama1nama2:nama1nama2}).then(res => {
      console.log(res)
      hasilauten1 = res
    })
    await roomVsoloo.findOne({nama1nama2:nama2nama1}).then(res => {
      console.log(res)
      hasilauten2 = res
    })

  if(hasilauten1 !== hasilauten2)
  return
  res.status(409)
  
  if(hasilauten1 == hasilauten2){
  console.log('oke')
  }
     
    
      const room = new roomVsoloo(req.body)
      room.save((err,data) => {
          if(err) console.log(err)
          res.json(data)
       })
 

   
})


module.exports = router