const sportService = require("../services/sport.service");

const createSport = async (req, res) => {
  try {
    const sport = await sportService.createSport(req.body);
    res.status(201).json(sport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllSports = async (req, res) => {
  try {
    const sports = await sportService.getAllSports();
    res.json(sports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSportById = async (req, res) => {
  try {
    const sport = await sportService.getSportById(req.params.id);
    if (!sport) return res.status(404).json({ message: "Sport not found" });
    res.json(sport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSport = async (req, res) => {
  try {
    const sport = await sportService.updateSport(req.params.id, req.body);
    if (!sport) return res.status(404).json({ message: "Sport not found" });
    res.json(sport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSport = async (req, res) => {
  try {
    const result = await sportService.deleteSport(req.params.id);
    if (!result) return res.status(404).json({ message: "Sport not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSport,
  getAllSports,
  getSportById,
  updateSport,
  deleteSport,
};
