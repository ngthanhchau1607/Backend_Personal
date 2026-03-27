const { Transaction } = require("../models");

const createTransaction = async (data) => {
  return await Transaction.create(data);
};

const getAllTransactions = async () => {
  return await Transaction.findAll({
    order: [["date", "DESC"]],
  });
};

const getTransactionById = async (id) => {
  return await Transaction.findByPk(id);
};

const updateTransaction = async (id, data) => {
  const transaction = await Transaction.findByPk(id);
  if (!transaction) return null;
  await transaction.update(data);
  return transaction;
};

const deleteTransaction = async (id) => {
  const transaction = await Transaction.findByPk(id);
  if (!transaction) return null;
  await transaction.destroy();
  return true;
};

const getTransactionsByPersonId = async (person_id) => {
  return await Transaction.findAll({
    where: { person_id },
    order: [["date", "DESC"]],
  });
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getTransactionsByPersonId,
};
