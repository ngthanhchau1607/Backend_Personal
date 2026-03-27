const { Person, Transaction } = require("../models");

const createPerson = async (data) => {
  return await Person.create(data);
};

const getAllPersons = async () => {
  return await Person.findAll({
    include: { model: Transaction, as: "transactions" },
    order: [["id", "DESC"]],
  });
};

const getPersonById = async (id) => {
  return await Person.findByPk(id, {
    include: { model: Transaction, as: "transactions" },
  });
};

const updatePerson = async (id, data) => {
  const person = await Person.findByPk(id);
  if (!person) return null;
  await person.update(data);
  return person;
};

const deletePerson = async (id) => {
  const person = await Person.findByPk(id);
  if (!person) return null;
  await person.destroy(); // Cascade xóa transactions nếu setup onDelete
  return true;
};

module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
