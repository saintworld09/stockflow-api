const Joi = require("joi");

const supplierSchema = Joi.object({
  companyName: Joi.string().trim().required(),

  contactName: Joi.string().trim().required(),

  email: Joi.string().email().required(),

  phone: Joi.string().trim().required(),

  address: Joi.string().trim().required(),
});

module.exports = supplierSchema;