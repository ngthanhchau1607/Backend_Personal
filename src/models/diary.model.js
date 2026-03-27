const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Diary = sequelize.define(
  "Diary",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    events: DataTypes.TEXT("medium"),
    feelings: DataTypes.TEXT("medium"),
    thoughts: DataTypes.TEXT("medium"),
    plans: DataTypes.TEXT("medium"),
  },
  { tableName: "diaries", timestamps: true, underscored: true },
);

module.exports = Diary;
