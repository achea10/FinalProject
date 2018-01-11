import axios from "axios";

export default {
	//Get all posts
	getPosts: function () {
		return axios.get("api/posts");
	},
	savePost: function(postData) {
		return axios.post("/api/posts", postData);
	},
	getInstructor: function () {
		return axios.get("api/instructor");
	},
	saveInstructor: function(instructorData) {
		return axios.post("/api/instructor", instructorData);
	}
};