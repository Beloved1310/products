"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_1 = require("../validation/product");
const product_2 = require("../services/product");
const response_1 = require("../services/response");
exports.productController = {
    async createProduct(req, res) {
        const { value, error } = product_1.productValidation.create.validate(req.body);
        if (error)
            return res.status(400).send({ error: error.details[0].message });
        const data = await product_2.productService.createProduct(value);
        return response_1.ResponseService.success(res, 'Product Successfully Created', data);
    },
    async updateProduct(req, res) {
        const { value, error } = product_1.productValidation.update.validate(req.body);
        if (error)
            return res.status(400).send({ error: error.details[0].message });
        const { code } = req.params;
        await product_2.productService.updateProduct(code, value);
        return response_1.ResponseService.success(res, 'Product Successfully Updated');
    },
    async deleteProduct(req, res) {
        const { code } = req.params;
        await product_2.productService.deleteProduct(code);
        return response_1.ResponseService.success(res, 'Product Successfully Deleted');
    },
    async viewProduct(req, res) {
        const { code } = req.params;
        const Product = await product_2.productService.getProduct(code);
        const { _id, ...data } = Product.toObject();
        return response_1.ResponseService.success(res, 'Product Successfully Retrieved', data);
    },
    async listProducts(req, res) {
        const queryParams = {
            ...req.query,
        };
        const data = await product_2.productService.listProducts(queryParams);
        return response_1.ResponseService.success(res, 'Products Successfully Retrieved', data);
    },
};
//# sourceMappingURL=product.js.map