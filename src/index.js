
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

require('./routes/index')(app);
require('./middlewares/errors')(app);

app.listen(process.env.API_PORT, () => {
    console.log(`Node.js API listening on port: ${process.env.API_PORT}`);
});
