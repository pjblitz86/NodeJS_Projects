const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is awesome",
        imageUrl: "../images/laptop.jpeg",
        creator: {
          name: "Paul"
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed");
    error.statusCode = 422;
    throw error;
  }
  const { title, content } = req.body;
  const post = new Post({
    title: title,
    imageUrl: "images/laptop.jpeg",
    content: content,
    creator: { name: "Paul" }
  });
  post
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Post created",
        post: result
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
