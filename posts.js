const express = require("express");

const router = express.Router();

const Post =
require("../models/Post");

router.post("/create",
async(req,res)=>{

    const post =
    new Post({

        title:req.body.title,
        content:req.body.content,
        image:req.body.image

    });

    await post.save();

    res.json(post);

});

module.exports = router;
router.get("/all",
async(req,res)=>{

    const posts =
    await Post.find();

    res.json(posts);

});
