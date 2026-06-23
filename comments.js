const express =
require("express");

const router =
express.Router();

const Comment =
require("../models/Comment");

router.post("/add",
async(req,res)=>{

    const comment =
    new Comment({

        postId:req.body.postId,
        comment:req.body.comment

    });

    await comment.save();

    res.json(comment);

});

module.exports = router;
