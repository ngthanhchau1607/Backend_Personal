const express = require("express");
const router = express.Router();

const upload = require("../config/multer.config");
const uploadController = require("../controllers/upload.controller");

// Upload 1 ảnh
router.post("/single", upload.single("image"), uploadController.uploadSingle);

// Upload nhiều ảnh (max 10 ảnh)
router.post(
  "/multiple",
  upload.array("images", 10),
  uploadController.uploadMultiple,
);

router.post(
  "/video/single",
  upload.single("video"),
  uploadController.uploadVideo,
);

module.exports = router;
