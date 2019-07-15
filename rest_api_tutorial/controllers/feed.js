exports.getPosts = (req, res, next) => {
  res
    .status(200)
    .json({ posts: [{ title: "First Post", content: "This is awesome" }] });
};

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;
  // create post in db
  res.status(201).json({
    message: "Post created",
    post: { id: new Date().toISOString().replace(/:/g, "-"), title, content }
  });
};
