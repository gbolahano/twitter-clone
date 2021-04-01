const { Post, User } = require("../models");

const getPosts = async (req, res) => {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
    include: {
      model: User,
      attributes: ["fullname", "handle", "avatarUri"],
    },
  });

  res.json({ posts });
};

const storePost = async (req, res) => {
  const { content } = req.body;

  let insertedPost = await Post.create({
    content: content,
    userId: 1,
  });
  let lastInsertedPost = await Post.findOne({
    where: {
      id: insertedPost.id,
    },
    include: {
      model: User,
      attributes: ["fullname", "handle", "avatarUri"],
    },
  });

  res.json({
    post: lastInsertedPost,
  });
};

module.exports = { getPosts, storePost };
