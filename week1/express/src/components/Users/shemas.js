const joi = require('joi');

const shema = {
    add: joi.object().keys({
        name: joi.string().required(),
        age: joi.number().min(16).max(65).required(),
    }),
    find: joi.object().keys({
        name: joi.string().required(),
    }),
    findId: joi.object().keys({
        id: joi.number().required(),
    }),
    update: joi.object().keys({
        id: joi.number().required(),
        name: joi.string(),
        age: joi.number().min(16).max(65),
    }),
};

module.exports = shema;
