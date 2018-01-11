const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorPostSchema = new Schema({
	title: { type: String, required: true},
  	body: { type: String, required: true },
 	author: { type: String, required: true },
 	url: { type: String, required: false},
 	date: { type: Date, default: Date.now }
});

const Instructor = mongoose.model("Instructor", instructorPostSchema);

module.exports = Instructor;