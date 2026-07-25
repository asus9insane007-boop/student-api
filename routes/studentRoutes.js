const express = require("express");

const router = express.Router();

const {
    createStudent,
    getStudents
} = require("../controllers/studentController");

// Create Student
router.post("/students", createStudent);

// Get All Students
router.get("/students", getStudents);

module.exports = router;