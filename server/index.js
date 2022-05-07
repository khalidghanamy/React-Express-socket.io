 const express=require('express')
 const app = express()
const http=require('http')
const cors =require('cors')
const {Server}=require('socket.io')

app.use(cors());

const server=http.createServer(app)
      server.listen(4000,()=>{
          console.log('server is up');
      })

const io =new Server (server,{
    cors:{
        origin:'http://localhost:3000',
        methods: ["GET","POSt"]
    }
})

io.on("connection",(socket)=>{
    console.log(`user connected :${socket.id}`);
    socket.on('send_message',(data)=>{
        console.log(data);
    })
})