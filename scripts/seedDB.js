//=======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================
const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Post collection and inserts the books below

mongoose.connect(

  process.env.MONGODB_URI || "mongodb://localhost/musicTYE",
  {
    useMongoClient: true
  }
);

const postSeed = [
  {
    title: "Test Schema",
    author: "Philip Costache",
    body:
      'TEST',
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
