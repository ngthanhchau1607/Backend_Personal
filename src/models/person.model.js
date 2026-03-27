const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Transaction = require("./transaction.model");

const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    own: {
      type: DataTypes.STRING, // CREDITOR hoặc DEBTOR
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
    tableName: "persons",
    timestamps: true,
    underscored: true,
  },
);

module.exports = Person;
