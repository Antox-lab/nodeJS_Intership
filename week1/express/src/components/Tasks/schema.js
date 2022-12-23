const joi = require('joi');

const schema = {
    add: joi.object().keys({
        assignee: joi.string().required(),
        title: joi.string().required(),
        description: joi.string(),
        estimatedTime: joi.number().required(),
        createdBy: joi.string().required(),
    }),
    update: joi.object().keys({
        estimatedTime: joi.number().required(),
    }),
    delete: joi.object().keys({
        id: joi.string().required(),
    }),
};

module.exports = schema;
