const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Knowledge = sequelize.define(
  "Knowledge",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    link: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "knowledges", timestamps: true, underscored: true },
);

module.exports = Knowledge;
