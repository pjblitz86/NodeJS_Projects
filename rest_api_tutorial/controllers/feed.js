const { validationResult } = require("express-validator");

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
    return res
      .status(422)
      .json({ message: "validation failed", errors: errors.array() });
  }
  const { title, content } = req.body;
  // create post in db
  res.status(201).json({
    message: "Post created",
    post: {
      _id: new Date().toISOString().replace(/:/g, "-"),
      title,
      content,
      creator: { name: "Paul" },
      createdAt: new Date()
    }
  });
};
