const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/musictoyourears",
  {
    useMongoClient: true
  }
);

const postSeed = [
	{
		title: "stuff",
		body: "blah blah blah",
		author: "who is logged in",
		imgURL: "www.url.com",
		date: new Date(Date.now())
	},
	{
		title: "stuff2",
		body: "blah blah blah2",
		author: "who is logged in",
		imgURL: "www.url.com",
		date: new Date(Date.now())

	},
	{
		title: "stuff3",
		body: "blah blah blah",
		author: "who is logged in",
		imgURL: "www.url.com",
		date: new Date(Date.now())
	}
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });