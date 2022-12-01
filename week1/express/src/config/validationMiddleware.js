const validation = (schema, params) => (req, res, next) => {
    const { error } = schema.validate(params ? req[params] : req.body);

    if (error) {
        return res.status(422).json({
            message: 'Invalid request',
            details: error.message,
        });
    }

    return next();
};

module.exports = {
    validation,
};
