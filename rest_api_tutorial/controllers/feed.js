const { validationResult } = require("express-validator");
const Post = require("../models/post");
const errorHandler = require("../util/error");

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.status(200).json({ message: "Fetched posts", posts: posts });
    })
    .catch((err, next) => errorHandler(err, next));
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("validation failed");
    error.statusCode = 422;
    throw error;
  }
  if (!req.file) {
    const error = new Error("no image provided");
    error.statusCode = 422;
    throw error;
  }
  const { title, content } = req.body;
  const imageUrl = req.file.path.replace("\\", "/");
  const post = new Post({
    title: title,
    imageUrl: imageUrl,
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
    .catch((err, next) => errorHandler(err, next));
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then(post => {
      if (!post) {
        const error = new Error("Could not find post");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Post fetched", post: post });
    })
    .catch((err, next) => errorHandler(err, next));
};
