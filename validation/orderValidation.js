const Joi = require("joi");

const orderSchema = Joi.object({
  customerId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),

  productId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),

  quantity: Joi.number()
    .integer()
    .min(1)
    .required(),

  totalPrice: Joi.number()
    .min(0)
    .required(),

  orderStatus: Joi.string()
    .valid(
      "Pending",
      "Processing",
      "Completed",
      "Cancelled"
    )
    .optional(),
});

module.exports = orderSchema;