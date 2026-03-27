const { Diary, DiaryImage } = require("../models");

const createDiary = async (data) => {
  // tách images ra
  const { images, ...diaryData } = data;

  const diary = await Diary.create(diaryData);

  if (images && images.length > 0) {
    const diaryImages = images.map((url) => ({
      diary_id: diary.id,
      images: url,
    }));
    await DiaryImage.bulkCreate(diaryImages);
  }

  // trả về diary kèm images
  return await Diary.findByPk(diary.id, {
    include: { model: DiaryImage, as: "images" },
  });
};

const getAllDiaries = async () => {
  return await Diary.findAll({
    include: { model: DiaryImage, as: "images" },
    order: [["date", "DESC"]],
  });
};

const getDiaryById = async (id) => {
  return await Diary.findByPk(id, {
    include: { model: DiaryImage, as: "images" },
  });
};

const updateDiary = async (id, data) => {
  const diary = await Diary.findByPk(id);
  if (!diary) return null;

  const { images, ...diaryData } = data;
  await diary.update(diaryData);

  if (images) {
    // xóa cũ và thêm mới
    await DiaryImage.destroy({ where: { diary_id: diary.id } });
    const diaryImages = images.map((url) => ({
      diary_id: diary.id,
      image_url: url,
    }));
    await DiaryImage.bulkCreate(diaryImages);
  }

  return await Diary.findByPk(diary.id, {
    include: { model: DiaryImage, as: "images" },
  });
};

const deleteDiary = async (id) => {
  const diary = await Diary.findByPk(id);
  if (!diary) return null;

  await diary.destroy(); // cascade sẽ xóa images
  return true;
};

const getDiariesByDate = async (date) => {
  return await Diary.findAll({
    where: {
      date: date, // nếu date là dạng YYYY-MM-DD
    },
    include: { model: DiaryImage, as: "images" },
    order: [["date", "DESC"]],
  });
};

module.exports = {
  createDiary,
  getAllDiaries,
  getDiaryById,
  updateDiary,
  deleteDiary,
  getDiariesByDate,
};
