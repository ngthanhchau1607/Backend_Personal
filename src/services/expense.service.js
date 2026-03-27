const Expense = require("../models/expense.model");

const createExpense = async (data) => {
  return await Expense.create(data);
};

const getAllExpenses = async () => {
  return await Expense.findAll({ order: [["id", "DESC"]] });
};

const getExpenseById = async (id) => {
  return await Expense.findByPk(id);
};

const updateExpense = async (id, data) => {
  const expense = await Expense.findByPk(id);
  if (!expense) return null;
  await expense.update(data);
  return expense;
};

const deleteExpense = async (id) => {
  const expense = await Expense.findByPk(id);
  if (!expense) return null;
  await expense.destroy();
  return true;
};

const getExpensesByDate = async (date) => {
  return await Expense.findAll({
    where: {
      date: date, // YYYY-MM-DD
    },
    order: [["id", "DESC"]],
  });
};

module.exports = {
  createExpense,
  getAllExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
  getExpensesByDate,
};
