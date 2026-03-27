const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Expense = sequelize.define(
  "Expense",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    amount: { type: DataTypes.BIGINT, allowNull: false },
    note: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "expenses", timestamps: true, underscored: true },
);

module.exports = Expense;
