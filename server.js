const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [
  {
    id: 1,
    title: "Welcome Blog",
    content: "This is the first blog post"
  }
];

let comments = [];

// Get All Posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Create Post
app.post("/posts", (req, res) => {

  const post = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content
  };

  posts.push(post);

  res.json(post);
});

// Get Comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// Add Comment
app.post("/comments", (req, res) => {

  const comment = {
    id: Date.now(),
    postId: req.body.postId,
    text: req.body.text
  };

  comments.push(comment);

  res.json(comment);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
