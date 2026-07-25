const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },

    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v);
            },
            message: "Phone number must be exactly 10 digits"
        }
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: 16,
        max: 100
    },

    course: {
        type: String,
        required: [true, "Course is required"]
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);