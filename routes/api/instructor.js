const router = require("express").Router();
const instructorController = require("../../controllers/instructorController");

router.route("/")
	.post(instructorController.create)
	.get(instructorController.findAll);


module.exports = router;