const express = require("express");
const router = express.Router();
const diaryController = require("../controllers/diary.controller");

router.post("/", diaryController.createDiary);
router.get("/", diaryController.getAllDiaries);
router.get("/:id", diaryController.getDiaryById);
router.put("/:id", diaryController.updateDiary);
router.delete("/:id", diaryController.deleteDiary);
router.get("/date/:date", diaryController.getDiariesByDate);

module.exports = router;
