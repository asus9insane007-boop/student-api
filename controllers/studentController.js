const Student = require("../models/Student");

// Create Student
const createStudent = async (req, res, next) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            data: student
        });

    } catch (error) {
        next(error);
    }
};

// Get All Students
const getStudents = async (req, res, next) => {
    try {
        const students = await Student.find();

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createStudent,
    getStudents
};