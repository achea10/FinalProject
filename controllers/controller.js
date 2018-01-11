
const db = require("../models");

//Defining methods for the PostController
module.exports = {

	createTopic: function(req, res) {

		db.Topic
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},

	allTopics: function(req,res) {
		
		db.Topic
		.find(req.query)
		.sort({ date: -1 })
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},

	topicById: function(req, res) {

	    db.Topic
	    .findById(req.params.id)
	    .then(dbModel => res.json(dbModel))
	    .catch(err => res.status(422).json(err));
	},

	removeTopic: function(req, res) {

	    db.Topic
	    .findById({ _id: req.params.id })
	    .then(dbModel => dbModel.remove())
	    .then(dbModel => res.json(dbModel))
	    .catch(err => res.status(422).json(err));
	  }

	// topicComments: function(req, res) {

	// 	db.Topic
	// 	.findOne({ _id: req.params.id })
	// 	.populate("comment")
	// 	.then(dbModel => res.json(dbModel))
	// 	.catch(err => res.status(422).json(err));

};