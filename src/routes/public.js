
const express = require('express');
const router = express.Router();
const { StatusCodes } = require('http-status-codes');

const { errorResponse, CustomError } = require('../common/error');

router.route('/:lang')
    .get((req, res) => {

        try {
            const greetings = {
                'en': 'Hello world',
                'es': 'Hola mundo',
                'fr': 'Salut monde',
                'it': 'Ciao mondo'
            };

            if (Object.keys(greetings).indexOf(req.params.lang) === -1) {
                throw new CustomError(StatusCodes.BAD_REQUEST);
            }

            return res.status(200).json({
                success: true,
                message: `Node.js API - ${greetings[req.params.lang]}`
            });
        }
        catch (err) {
            return errorResponse(err, res);
        }

    });

module.exports = router;
