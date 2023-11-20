// db.js
const mongoose = require("mongoose");

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
