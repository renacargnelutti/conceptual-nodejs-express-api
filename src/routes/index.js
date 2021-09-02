
const publicRoute = require('./public');

module.exports = (app) => {
    app.use('/api/v1', publicRoute);
};
