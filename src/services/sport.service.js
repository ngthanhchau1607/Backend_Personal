const { Sport, Category, Technique } = require("../models");

const createSport = async (data) => {
  return await Sport.create(data);
};

const getAllSports = async () => {
  return await Sport.findAll({
    include: {
      model: Category,
      as: "categories",
      include: { model: Technique, as: "techniques" },
    },
    order: [["id", "DESC"]],
  });
};

const getSportById = async (id) => {
  return await Sport.findByPk(id, {
    include: {
      model: Category,
      as: "categories",
      include: { model: Technique, as: "techniques" },
    },
  });
};

const updateSport = async (id, data) => {
  const sport = await Sport.findByPk(id);
  if (!sport) return null;
  await sport.update(data);
  return sport;
};

const deleteSport = async (id) => {
  const sport = await Sport.findByPk(id);
  if (!sport) return null;
  await sport.destroy(); // cascade xóa categories và techniques nếu setup onDelete
  return true;
};

module.exports = {
  createSport,
  getAllSports,
  getSportById,
  updateSport,
  deleteSport,
};
