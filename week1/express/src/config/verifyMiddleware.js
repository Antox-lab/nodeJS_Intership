const jwt = require('jsonwebtoken');

const autorization = (req, res, next) => {
    const header = req.headers.authorization;

    if (header) {
        const token = header.replace('Bearer ', '');

        jwt.verify(token, process.env.TOKEN, (err, item) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = item;

            return next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    autorization,
};
