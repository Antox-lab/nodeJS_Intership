const jwt = require('jsonwebtoken');
const service = require('./service');

const middleware = (schema, params) => (req, res, next) => {
    const { error } = schema.validate(params ? req[params] : req.body);

    if (error) {
        return res.status(422).json({
            message: 'Invalid request',
            details: error.message,
        });
    }

    return next();
};

const autorization = (req, res, next) => {
    const header = req.headers.authorization;

    if (header) {
        const token = header.split(' ')[1];

        jwt.verify(token, service.TOKEN_SECRET, (err, item) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = item;

            console.log(req.id);

            return next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    middleware,
    autorization,
};
