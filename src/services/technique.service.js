const { Technique } = require("../models");

const createTechnique = async (data) => {
  return await Technique.create(data);
};

const getAllTechniques = async () => {
  return await Technique.findAll({ order: [["id", "DESC"]] });
};

const getTechniqueById = async (id) => {
  return await Technique.findByPk(id);
};

const updateTechnique = async (id, data) => {
  const technique = await Technique.findByPk(id);
  if (!technique) return null;
  await technique.update(data);
  return technique;
};

const deleteTechnique = async (id) => {
  const technique = await Technique.findByPk(id);
  if (!technique) return null;
  await technique.destroy();
  return true;
};

const getTechniquesByCategoryId = async (categoryId) => {
  return await Technique.findAll({
    where: { category_id: categoryId },
    order: [["id", "DESC"]],
  });
};

module.exports = {
  createTechnique,
  getAllTechniques,
  getTechniqueById,
  updateTechnique,
  deleteTechnique,
  getTechniquesByCategoryId,
};
