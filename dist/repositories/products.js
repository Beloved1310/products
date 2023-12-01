"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const tslib_1 = require("tslib");
const product_1 = tslib_1.__importDefault(require("../model/product"));
exports.productRepository = {
    async getOneProduct(item) {
        const foundProduct = await product_1.default.findOne(item).select('-__v');
        return foundProduct;
    },
    async createProduct(createProduct) {
        const product = await product_1.default.create(createProduct);
        return product;
    },
    async updateProduct(code, updateFields) {
        const product = await product_1.default.updateOne({ code }, {
            $set: {
                ...updateFields,
            },
        });
        return product_1.default;
    },
    async deleteProduct(code) {
        const product = await product_1.default.deleteOne({ code });
        return product;
    },
    async listProducts(queryParams) {
        const perPage = 10;
        const page = parseInt(queryParams.page) || 1;
        const skip = (page - 1) * perPage;
        const [product, total] = await Promise.all([
            product_1.default.find(queryParams)
                .skip(skip)
                .limit(perPage)
                .select('-_id -__v')
                .exec(),
            product_1.default.countDocuments(queryParams).exec(),
        ]);
        const meta = {
            total,
            page,
            perPage,
            hasMore: total > page * perPage,
            nextPage: total > page * perPage ? page + 1 : null,
        };
        return { product, meta };
    },
};
//# sourceMappingURL=products.js.map