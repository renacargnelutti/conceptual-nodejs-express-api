
module.exports = (app) => {

    // eslint-disable-next-line no-unused-vars
    app.use(function (err, req, res, next) {
        err.statusCode = err.statusCode || 400;
        err.status = err.status || 'Bad request';

        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    });

};
