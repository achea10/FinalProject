//===================================================================
const router = require("express").Router();
const topicRoutes = require("./topics");

// initialize routes for "/api/topics" and "/api/comments"
router.use("/topics", topicRoutes);

module.exports = router;
