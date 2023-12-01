"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const Joi = require('joi');
exports.productValidation = {
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
};
//# sourceMappingURL=product.js.map