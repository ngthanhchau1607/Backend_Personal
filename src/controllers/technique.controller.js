const techniqueService = require("../services/technique.service");

const createTechnique = async (req, res) => {
  try {
    const technique = await techniqueService.createTechnique(req.body);
    res.status(201).json(technique);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllTechniques = async (req, res) => {
  try {
    const techniques = await techniqueService.getAllTechniques();
    res.json(techniques);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTechniqueById = async (req, res) => {
  try {
    const technique = await techniqueService.getTechniqueById(req.params.id);
    if (!technique)
      return res.status(404).json({ message: "Technique not found" });
    res.json(technique);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTechnique = async (req, res) => {
  try {
    const technique = await techniqueService.updateTechnique(
      req.params.id,
      req.body,
    );
    if (!technique)
      return res.status(404).json({ message: "Technique not found" });
    res.json(technique);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTechnique = async (req, res) => {
  try {
    const result = await techniqueService.deleteTechnique(req.params.id);
    if (!result)
      return res.status(404).json({ message: "Technique not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTechniquesByCategoryId = async (req, res) => {
  try {
    const techniques = await techniqueService.getTechniquesByCategoryId(
      req.params.categoryId,
    );
    res.json(techniques);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTechnique,
  getAllTechniques,
  getTechniqueById,
  updateTechnique,
  deleteTechnique,
  getTechniquesByCategoryId,
};
