const express = require("express");
const router = express.Router();
const techniqueController = require("../controllers/technique.controller");

router.post("/", techniqueController.createTechnique);
router.get("/", techniqueController.getAllTechniques);
router.get("/:id", techniqueController.getTechniqueById);
router.put("/:id", techniqueController.updateTechnique);
router.delete("/:id", techniqueController.deleteTechnique);
router.get(
  "/category/:categoryId",
  techniqueController.getTechniquesByCategoryId,
);

module.exports = router;
