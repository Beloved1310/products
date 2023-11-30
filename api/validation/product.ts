const Joi = require('joi')

export const productValidation : any = {
  create: Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  }),
  update: Joi.object({
    name: Joi.string().optional().trim(),
    price: Joi.number().optional(),
    quantity: Joi.number().optional(),
  }),
}