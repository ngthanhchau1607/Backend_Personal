const personService = require("../services/person.service");

const createPerson = async (req, res) => {
  try {
    const person = await personService.createPerson(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPersons = async (req, res) => {
  try {
    const persons = await personService.getAllPersons();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPersonById = async (req, res) => {
  try {
    const person = await personService.getPersonById(req.params.id);
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePerson = async (req, res) => {
  try {
    const person = await personService.updatePerson(req.params.id, req.body);
    if (!person) return res.status(404).json({ message: "Person not found" });
    res.json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePerson = async (req, res) => {
  try {
    const result = await personService.deletePerson(req.params.id);
    if (!result) return res.status(404).json({ message: "Person not found" });
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPerson,
  getAllPersons,
  getPersonById,
  updatePerson,
  deletePerson,
};
