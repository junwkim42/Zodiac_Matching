const router = require("express").Router();
const zodiacRoutes = require("./zodiacs");

// Book routes
router.use("/zodiacs", zodiacRoutes);

module.exports = router;
