const router = require("express").Router();
const zodiacsController = require("../../controllers/zodiacsController");

// Matches with "/api/zodiacs"
router.route("/")
  .get(zodiacsController.findAll)
  .post(zodiacsController.create);

// Matches with "/api/zodiacs/:id"
router
  .route("/:id")
  .get(zodiacsController.findById)
  .put(zodiacsController.update)
  .delete(zodiacsController.remove);

module.exports = router;
