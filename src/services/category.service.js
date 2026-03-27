const { Category, Technique } = require("../models");

const createCategory = async (data) => {
  return await Category.create(data);
};

const getAllCategories = async () => {
  return await Category.findAll({
    include: { model: Technique, as: "techniques" },
    order: [["id", "DESC"]],
  });
};

const getCategoryById = async (id) => {
  return await Category.findByPk(id, {
    include: { model: Technique, as: "techniques" },
  });
};

const updateCategory = async (id, data) => {
  const category = await Category.findByPk(id);
  if (!category) return null;
  await category.update(data);
  return category;
};

const deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) return null;
  await category.destroy(); // cascade xóa techniques nếu setup onDelete
  return true;
};

const getCategoriesBySportId = async (sportId) => {
  return await Category.findAll({
    where: {
      sport_id: sportId,
    },
    include: { model: Technique, as: "techniques" },
    order: [["id", "DESC"]],
  });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoriesBySportId,
};
