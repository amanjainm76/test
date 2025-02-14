require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/auth-router");
const guidelineRoutes = require("./router/guideline-router");
const streamRoutes = require("./router/streamRoutes");
const subjectRoutes = require("./router/subjectRoutes");
const innerSubjectUnitRoutes = require("./router/InnerSubjectUnitRoutes");
const examRoutes = require("./router/exam-router");
const testRoutes = require("./router/testRoutes");
const difficultyLevelRoutes = require("./router/difficultyLevelRoutes");
const skillsRoutes = require("./router/skillsRoutes");
const tagRoutes = require("./router/tagRoutes");
const topicRoutes = require("./router/topicRoutes");
const subTopicRoutes = require("./router/subTopicRoutes");
const markingSchemesRoutes = require("./router/markingSchemesRoutes");
const testListRouter = require("./router/testListRouter");
const questionQRoutes = require("./router/questionQRoutes");
const TestSeriesRoutes = require("./router/testSeries-router");
const userRoutes = require("./router/userRoutes");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

const corsOption = {
  method: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credential: true,
};
app.use(cors(corsOption));

app.use("/api/auth", router);
app.use("/api/auth/guideline", guidelineRoutes);
app.use("/api/auth/stream", streamRoutes);
app.use("/api/auth/subjects", subjectRoutes);
app.use("/api/auth/innerSubjectUnits", innerSubjectUnitRoutes);
app.use("/api/auth/exam", examRoutes);
app.use("/api/auth/test", testRoutes);
app.use("/api/auth/difficultyLevel", difficultyLevelRoutes);
app.use("/api/auth/skills", skillsRoutes);
app.use("/api/auth/tags", tagRoutes);
app.use("/api/auth/topic", topicRoutes);
app.use("/api/auth/subtopic", subTopicRoutes);
app.use("/api/auth/markingSchemes", markingSchemesRoutes);
app.use("/api/auth/", testListRouter);
app.use("/api/auth/", questionQRoutes);
app.use("/api/auth/", TestSeriesRoutes);
app.use("/api/auth/", userRoutes);
const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
  });
});
