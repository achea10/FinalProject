const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true},
  body: { type: String, required: true },
  author: { type: String, required: true },
  imgUrl: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
