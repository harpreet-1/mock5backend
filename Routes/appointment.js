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
appointmentRouter.get("/", async (req, res) => {
  try {
    let { specialization, order, search } = req.query;

    let query = {};

    if (specialization) {
      query.specialization = specialization;
    }
    if (order) {
      order = { date: order };
    } else {
      order = { createdAt: 1 };
    }

    let appointments = await appointmentModel.find(query).sort(order);

    return res.status(201).json({ status: "ok", appointments });
  } catch (error) {
    console.log("error from appointment post **************", error);
    res.status(500).json({ error: "internal server error" });
  }
});

appointmentRouter.delete("/:id", async (req, res) => {
  try {
    let appointments = await appointmentModel.findByIdAndDelete(req.params.id);

    return res
      .status(200)
      .json({ status: "ok", message: "appointment deleted" });
  } catch (error) {
    console.log("error from  delete appointment  **************", error);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = appointmentRouter;
