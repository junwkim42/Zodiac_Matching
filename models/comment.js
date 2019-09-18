const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//image, profile pics needed
const commentSchema = new Schema({
  username: { type: String, required: true },
  receiver: { type: String, required: true},
  comment: { type: String }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
