const joi = require('joi');

const shema = {
    add: joi.object().keys({
        firstName: joi.string().min(3).max(20).required(),
        lastName: joi.string(),
        email: joi.string().required(),
        password: joi.string().required(),
    }),
    find: joi.object().keys({
        firstName: joi.string().required(),
    }),
    findId: joi.object().keys({
        id: joi.string().required(),
    }),
    update: joi.object().keys({
        id: joi.string().required(),
        firstName: joi.string().min(3).max(20).required(),
        lastName: joi.string(),
        email: joi.string(),
        password: joi.string(),
    }),
};

module.exports = shema;
