const express = require("express");
const router = express.Router();
const knowledgeController = require("../controllers/knowledge.controller");

router.post("/", knowledgeController.createKnowledge);
router.get("/", knowledgeController.getAllKnowledges);
router.get("/:id", knowledgeController.getKnowledgeById);
router.put("/:id", knowledgeController.updateKnowledge);
router.delete("/:id", knowledgeController.deleteKnowledge);

module.exports = router;
