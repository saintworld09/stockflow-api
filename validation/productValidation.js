const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string().trim().required(),

  sku: Joi.string().trim().required(),

  category: Joi.string().trim().required(),

  price: Joi.number().min(0).required(),

  quantity: Joi.number().integer().min(0).required(),

  supplierId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),

  description: Joi.string().allow("").optional(),

  status: Joi.string()
    .valid("Available", "Out of Stock", "Discontinued")
    .optional(),
});

module.exports = productSchema;