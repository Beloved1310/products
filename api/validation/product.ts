const Joi = require('joi')

export const productValidation : any = {
  create: Joi.object({
    name: Joi.string().required().trim(),
    price: Joi.number().required().trim(),
    quantity: Joi.number().required(),
  }),
  update: Joi.object({
    name: Joi.string().optional().trim(),
    price: Joi.number().optional().trim(),
    quantity: Joi.number().optional(),
  }),
}