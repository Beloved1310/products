"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const ProductSchema = new mongoose_1.Schema({
    image: {
        type: String,
    },
    cloudinary_id: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Product', ProductSchema);
//# sourceMappingURL=product.js.map