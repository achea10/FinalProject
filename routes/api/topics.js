//=====================================================================
const router = require("express").Router();
const topicController = require("../../controllers/controller");

// matches with /api/topics/
router.route("/")
.post(topicController.createTopic)
.get(topicController.allTopics);
// matches with /api/topics/:id
router.route("/:id")
.get(topicController.topicById)
.put(topicController.removeTopic);

module.exports = router;