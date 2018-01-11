//===================================================================
import axios from "axios";

export default {

	getTopics: function () {

		return axios.get("/api/topics/");
	},
	getTopic: function(id) {

    	return axios.get("/api/topics/" + id);
  	},
	saveTopic: function(topicData) {

		return axios.post("/api/topics", topicData);
	},
	getComments: function(id) {

		return axios.get("/api/comments/" + id);
	},
	saveComment: function(commentData) {

		return axios.post("/api/comments/" + commentData);
	}
};