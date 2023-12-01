"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const tslib_1 = require("tslib");
const products_1 = require("../repositories/products");
const exists_error_1 = tslib_1.__importDefault(require("../utilis/exists-error"));
const not_found_error_1 = tslib_1.__importDefault(require("../utilis/not-found-error"));
exports.productService = {
    async createProduct(payload) {
        const Product = await products_1.productRepository.getOneProduct({ name: payload.name });
        if (Product)
            throw new exists_error_1.default('Product');
        const createProduct = await products_1.productRepository.createProduct(payload);
        return createProduct;
    },
    async updateProduct(code, updateFields) {
        const Product = await products_1.productRepository.getOneProduct({ code });
        if (!Product)
            throw new not_found_error_1.default('Product');
        const createProduct = await products_1.productRepository.updateProduct(code, updateFields);
        return createProduct;
    },
    async deleteProduct(code) {
        const Product = await products_1.productRepository.getOneProduct({ code });
        if (!Product)
            throw new not_found_error_1.default('Product');
        const deleteProduct = await products_1.productRepository.deleteProduct(code);
        return deleteProduct;
    },
    async getProduct(code) {
        const Product = await products_1.productRepository.getOneProduct({ code });
        if (!Product)
            throw new not_found_error_1.default('Product');
        return Product;
    },
    async listProducts(queryParams) {
        if (typeof queryParams.name === 'string') {
            queryParams.name = { $regex: queryParams.name, $options: 'i' };
        }
        if (typeof queryParams.price === 'string') {
            queryParams.founded = parseInt(queryParams.founded);
        }
        if (typeof queryParams.quantity === 'string') {
            queryParams.founded = parseInt(queryParams.quantity);
        }
        const listProducts = await products_1.productRepository.listProducts(queryParams);
        return listProducts;
    },
};
//# sourceMappingURL=product.js.map