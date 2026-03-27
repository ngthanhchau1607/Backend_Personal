const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Technique = sequelize.define(
  "Technique",
  {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    difficulty: { type: DataTypes.STRING },
    image_url: { type: DataTypes.STRING },
    video_url: { type: DataTypes.STRING },
    instruction: { type: DataTypes.TEXT },
    category_id: { type: DataTypes.BIGINT, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "techniques", timestamps: true, underscored: true },
);

module.exports = Technique;
