const router = require("express").Router();
const postRoutes = require("./posts");
const instructorRoutes = require("./instructor");

// routes
router.use("/posts", postRoutes);
router.use("/instructor", instructorRoutes);

module.exports = router;
