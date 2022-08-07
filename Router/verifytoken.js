const router = require("express").Router();
const { protect } = require("../Middleware/verify");
router.route("/verify").get(protect);
module.exports = router;