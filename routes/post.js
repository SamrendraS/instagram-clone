const express = require('express')
const router =express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/require_login')
const Post = mongoose.model("Post")

router.get('/allpost', (req,res)=>{
    Post.find()
    .populate("postedBy", "_id name")
    .then(post=>{
        return res.json({post})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',requireLogin,(req,res)=>{
    const {title, body} = req.body
    if(!title || !body){
        return res.status(422).json({error:"Please add all the required fields"})
    }

    req.user.password = undefined

    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save().then(result=>{
        return res.json({post: result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost', (req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy", "_id name")
    .then(myPost=>res.json)
})

module.exports = router