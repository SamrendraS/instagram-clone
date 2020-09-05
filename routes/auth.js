const express = require('express')
const router =express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")

router.get('/', (req,res)=>{
    res.send("hello")
})

router.post('/signup', (req,res)=>{
    const {name, email, password} = req.body
    if(!email || !password || !name){
        res.status(422).json({error:"please add all the required fields"})
    }
    res.json({message:"Successfully posted"})
})

module.exports = router