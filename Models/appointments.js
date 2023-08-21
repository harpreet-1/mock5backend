const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: { type: String, require: true },

  image: { type: String, require: true },
  specialization: { type: String, require: true },
  experience: { type: String, require: true },
  location: { type: String, require: true },
  date: { type: Date, default: new Date() },
  slots: { type: String, require: true },
  fee: { type: String, require: true },
});

const appointmentModel = mongoose.model("Appointment", appointmentSchema);
module.exports = appointmentModel;
