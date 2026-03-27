const Knowledge = require("../models/knowledge.model");

const createKnowledge = async (data) => {
  return await Knowledge.create(data);
};

const getAllKnowledges = async () => {
  return await Knowledge.findAll({ order: [["id", "DESC"]] });
};

const getKnowledgeById = async (id) => {
  return await Knowledge.findByPk(id);
};

const updateKnowledge = async (id, data) => {
  const knowledge = await Knowledge.findByPk(id);
  if (!knowledge) return null;
  await knowledge.update(data);
  return knowledge;
};

const deleteKnowledge = async (id) => {
  const knowledge = await Knowledge.findByPk(id);
  if (!knowledge) return null;
  await knowledge.destroy();
  return true;
};

module.exports = {
  createKnowledge,
  getAllKnowledges,
  getKnowledgeById,
  updateKnowledge,
  deleteKnowledge,
};
