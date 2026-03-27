const cloudinary = require("../config/cloudinary.config");

// Upload 1 file
const uploadToCloudinary = (fileBuffer, folderName = "uploads") => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: folderName }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      })
      .end(fileBuffer);
  });
};

// Upload nhiều file (Promise.all để upload song song)
const uploadMultiple = async (files, folderName = "uploads") => {
  const results = await Promise.all(
    files.map((file) => uploadToCloudinary(file.buffer, folderName)),
  );
  return results.map((res) => ({
    url: res.secure_url,
    public_id: res.public_id,
  }));
};

// Upload 1 video
const uploadVideoToCloudinary = (fileBuffer, folderName = "videos") => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { folder: folderName, resource_type: "video" }, // bắt buộc resource_type video
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      )
      .end(fileBuffer);
  });
};

module.exports = {
  uploadToCloudinary,
  uploadMultiple,
  uploadVideoToCloudinary,
};
