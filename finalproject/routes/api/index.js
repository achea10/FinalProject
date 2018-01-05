const router = require("express").Router();
const blankRoutes = require("./");

// Book routes
router.use("/blank", blankRoutes);

module.exports = router;
