const express = require("express");
const appointmentModel = require("../Models/appointments");
const appointmentRouter = express.Router();

appointmentRouter.post("/", async (req, res) => {
  try {
    let appointment = await appointmentModel.create(req.body);

    return res
      .status(201)
      .json({ message: "appointment  successfully added", appointment });
  } catch (error) {
    console.log("error from appointment post **************", error);
    res.status(500).json({ error: "internal server error" });
  }
});

module.exports = appointmentRouter;
