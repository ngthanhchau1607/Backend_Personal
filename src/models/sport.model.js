const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Sport = sequelize.define(
  "Sport",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "sports", timestamps: true, underscored: true },
);

module.exports = Sport;
