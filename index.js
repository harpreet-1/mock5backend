const express = require("express");
const dbConnection = require("./db");
const userRouter = require("./Routes/UserRoutes");
const app = express();
const cors = require("cors");
const appointmentRouter = require("./Routes/appointment");
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/appointment", appointmentRouter);
app.get("/", (req, res) => {
  res.json({ message: "welcome from sever " });
});
app.listen(8000, () => {
  dbConnection();
  console.log("server is running at 8000");
});
