const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://harpreetllg:harpreetllg@cluster0.4gj2jam.mongodb.net/mock5backend?retryWrites=true&w=majority"
    );
    console.log("db connected");
  } catch (error) {
    console.log("error in db connection");
  }
};
module.exports = dbConnection;
