const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", studentRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Student API Running"
    });
});

// 404 Middleware
app.use(notFound);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});