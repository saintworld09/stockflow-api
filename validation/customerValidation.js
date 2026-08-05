const Joi = require("joi");

const customerSchema = Joi.object({
  firstName: Joi.string().trim().required(),

  lastName: Joi.string().trim().required(),

  email: Joi.string().email().trim().required(),

  phone: Joi.string().trim().required(),

  city: Joi.string().trim().required(),
});

module.exports = customerSchema;