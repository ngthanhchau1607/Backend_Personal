const knowledgeService = require("../services/knowledge.service");

const createKnowledge = async (req, res) => {
  try {
    const knowledge = await knowledgeService.createKnowledge(req.body);
    res.status(201).json(knowledge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllKnowledges = async (req, res) => {
  try {
    const knowledges = await knowledgeService.getAllKnowledges();
    res.json(knowledges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getKnowledgeById = async (req, res) => {
  try {
    const knowledge = await knowledgeService.getKnowledgeById(req.params.id);
    if (!knowledge)
      return res.status(404).json({ message: "Knowledge not found" });
    res.json(knowledge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateKnowledge = async (req, res) => {
  try {
    const knowledge = await knowledgeService.updateKnowledge(
      req.params.id,
      req.body,
    );
    if (!knowledge)
      return res.status(404).json({ message: "Knowledge not found" });
    res.json(knowledge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteKnowledge = async (req, res) => {
  try {
    const result = await knowledgeService.deleteKnowledge(req.params.id);
    if (!result)
      return res.status(404).json({ message: "Knowledge not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createKnowledge,
  getAllKnowledges,
  getKnowledgeById,
  updateKnowledge,
  deleteKnowledge,
};
