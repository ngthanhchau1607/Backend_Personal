require("dotenv").config();
const express = require("express");
const cors = require("cors");
const testRouter = require("./routes/test.route");
const diaryRoutes = require("./routes/diary.route");
const userRouter = require("./routes/user.route");
const personRoutes = require("./routes/person.route");
const transactionRoutes = require("./routes/transaction.route");
const sportRoutes = require("./routes/sport.route");
const categoryRoutes = require("./routes/category.route");
const techniqueRoutes = require("./routes/technique.route");
const expenseRoutes = require("./routes/expense.route");
const knowledgeRoutes = require("./routes/knowledge.route");
const uploadRouters = require("./routes/upload.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", testRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/diaries", diaryRoutes);
app.use("/api/v1/persons", personRoutes);
app.use("/api/v1/transactions", transactionRoutes);
app.use("/api/v1/sports", sportRoutes);
app.use("/api/v1/categories", categoryRoutes);
app.use("/api/v1/techniques", techniqueRoutes);
app.use("/api/v1/expenses", expenseRoutes);
app.use("/api/v1/knowledges", knowledgeRoutes);
app.use("/api/v1/upload", uploadRouters);

module.exports = app;
