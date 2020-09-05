const express = require('express')
const app = express()
const mongoose = require("mongoose")
const {MONGOURI} = require('./keys')

const PORT = 5000
// qeWiJbiND8otn6mE

mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected', ()=>{
    console.log('Connected to Mongo')
})

mongoose.connection.on('error', (err)=>{
    console.log('Error', err)
})

app.listen(PORT, ()=>{
    console.log("Server is running on ", PORT)
})