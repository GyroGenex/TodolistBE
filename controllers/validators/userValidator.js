const Joi = require('joi');

const validators = {

    registerSchema: Joi.object({
        username: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(3).required(),
        password: Joi.string().required(),
    }),

    loginSchema: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })

};

module.exports = validators;
