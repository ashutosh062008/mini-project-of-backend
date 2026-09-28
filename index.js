const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employee");

const app = express();
const PORT = 5001;

const MONGO_URI = "mongodb://127.0.0.1:27017/employeeDB";

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// GET all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find({});

    res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      count: employees.length,
      data: employees
    });
  } catch (error) {
    console.error("Database error:", error.message);

    res.status(500).json({
      success: false,
      message: "Database error"
    });
  }
});