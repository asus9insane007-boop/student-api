const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: 2,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  phone: {
    type: String,
    match: [/^\d{10}$/, "Phone must be exactly 10 digits"],
  },
  course: {
    type: String,
    required: [true, "Course is required"],
    enum: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
    ],
  },
  age: {
    type: Number,
    min: 16,
    max: 40,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Student", studentSchema);