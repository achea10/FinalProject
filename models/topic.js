//==========================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({

  title: { type: String, required: true},
  author: { type: String, required: true },
  body: { type: String, required: true },
  comment: [{type: Schema.Types.ObjectId, ref: "Comment"}],
  date: { type: Date, default: Date.now }
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;