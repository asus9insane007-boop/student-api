const errorHandler = (err, req, res, next) => {

    if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "Duplicate email"
        });
    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;