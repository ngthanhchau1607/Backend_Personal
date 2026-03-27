const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected");

    // nếu muốn tự tạo table (optional)
    // await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

startServer();
