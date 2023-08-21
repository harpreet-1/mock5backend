const express = require("express");
const dbConnection = require("./db");
const userRouter = require("./Routes/UserRoutes");
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.json({ message: "welcome from sever " });
});
app.listen(8000, () => {
  dbConnection();
  console.log("server is running at 8000");
});
