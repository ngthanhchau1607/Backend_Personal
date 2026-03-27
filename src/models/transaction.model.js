const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Person = require("./person.model"); // import để define association

const Transaction = sequelize.define(
  "Transaction",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING, // UNPAID hoặc PAID
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    person_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "transactions",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Transaction;
