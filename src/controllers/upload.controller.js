const uploadService = require("../services/upload.service");

// Upload 1 ảnh
const uploadSingle = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "Chưa có file" });

    const folder = req.body.folder || "uploads";
    const result = await uploadService.uploadToCloudinary(
      req.file.buffer,
      folder,
    );

    res.json({
      message: "Upload 1 ảnh thành công",
      folder,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload nhiều ảnh
const uploadMultiple = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ message: "Chưa có file" });

    const folder = req.body.folder || "uploads";
    const results = await uploadService.uploadMultiple(req.files, folder);

    res.json({
      message: "Upload nhiều ảnh thành công",
      folder,
      images: results,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const uploadVideo = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "Chưa có file video" });

    const folder = req.body.folder || "videos";

    const result = await uploadService.uploadVideoToCloudinary(
      req.file.buffer,
      folder,
    );

    res.json({
      message: "Upload video thành công",
      folder,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    // Bắt lỗi Multer khi file >50MB
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "Video vượt quá 50MB" });
    }
    // Bắt lỗi file không phải MP4
    if (error.message === "Chỉ cho phép file MP4") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

module.exports = { uploadSingle, uploadMultiple, uploadVideo };
