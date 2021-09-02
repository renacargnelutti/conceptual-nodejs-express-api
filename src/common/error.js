
const { getReasonPhrase } = require('http-status-codes');

module.exports.errorResponse = (err, res) => {
    const message = err.message || 'Server error';
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({ success: false, message });
};

class CustomError extends Error {
    constructor(statusCode) {
        super();

        this.message = getReasonPhrase(statusCode);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports.CustomError = CustomError;