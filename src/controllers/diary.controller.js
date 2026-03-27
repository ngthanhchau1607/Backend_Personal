const diaryService = require("../services/diary.service");

const createDiary = async (req, res) => {
  try {
    const diary = await diaryService.createDiary(req.body);
    res.status(201).json(diary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDiaries = async (req, res) => {
  try {
    const diaries = await diaryService.getAllDiaries();
    res.json(diaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDiaryById = async (req, res) => {
  try {
    const diary = await diaryService.getDiaryById(req.params.id);
    if (!diary) return res.status(404).json({ message: "Diary not found" });
    res.json(diary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDiary = async (req, res) => {
  try {
    const diary = await diaryService.updateDiary(req.params.id, req.body);
    if (!diary) return res.status(404).json({ message: "Diary not found" });
    res.json(diary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDiary = async (req, res) => {
  try {
    const result = await diaryService.deleteDiary(req.params.id);
    if (!result) return res.status(404).json({ message: "Diary not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDiariesByDate = async (req, res) => {
  try {
    const diaries = await diaryService.getDiariesByDate(req.params.date);
    res.json(diaries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDiary,
  getAllDiaries,
  getDiaryById,
  updateDiary,
  deleteDiary,
  getDiariesByDate,
};
