const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3001
const http = require("http")
const server = http.createServer(app)
const { Server} = require('socket.io');
const io = new Server(server);
const path = require('path')

const routerRoom = require('./models/router')
const connection = require("./models/db")
const auth = require('./Router/login')
const roomVsoloR = require('./Router/roomVsolo')
const sign = require('./Router/sign')
const routechat = require("./Router/chatuser")
const listuserinroom = require("./Router/listUserinroom")
app.use(express.json())
connection()


app.use('/',roomVsoloR)

app.use("/",routerRoom)
app.use('/',auth)
app.use('/',sign)
app.use('/',routechat)
app.use('/',listuserinroom)


// socket io
let userOnline = 0;
io.on("connection",(socket) => {
    console.log(`socket with id ${socket.id} connect server`)

    userOnline++;
    socket.emit("userOnline",userOnline)
    socket.on("join",(data) => {
        socket.join(data)
        console.log(`user by id ${socket.id} join room: ${data}`)
    })
    socket.on("data-user",(data) => {
        console.log(data.room)
        socket.to(data.room).emit("message",data)
    })
    socket.on('roomdanpesan',(data) => {
         socket.broadcast.emit("realtimeroom",data)
    })
    socket.on("disconnect", () => {
        userOnline--;
       socket.emit("userOnline",userOnline)
        console.log("user disconnect "+ socket.id);
    });

})


server.listen(port,() => {
    console.log(`server running in http://localhost:${port}`)
})