
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/musictoyourears",
  {
    useMongoClient: true
  }
);

const topicSeed = [
	{
		title: "stuff",
    body: "whatever",
    author: "me",
    comment: [{
      author: "phililp goes here",
      title: "title goes here",
      body: "body goes here" 
    }],
		date: new Date(Date.now())
	}
];

db.Topic
  .remove({})
  .then(() => db.Topic.collection.insertMany(topicSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });