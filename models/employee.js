const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true
    },
    designation: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    department: {
      type: String
    },
    salary: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
