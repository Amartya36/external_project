const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/route')
const port = 3000

const app = express()
app.use(express.json())


mongoose.connect('mongodb+srv://chanda:QYho3EZNKLny4znA@cluster0.gkrjc46.mongodb.net/test',{useNewUrlParser:true}).then(()=>{


    console.log("mongoose is connected")
})

.catch((error)=>{
    console.log(error, "mongoose is not connected")
})
app.listen(3000, ()=>{
    console.log(`port is connected ${port}`)
})
    app.use('/', router)