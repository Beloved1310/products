"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const async_1 = require("../middleware/async");
const product_1 = require("../controller/product");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post('/create', auth_1.auth, (0, async_1.asyncErrorhandling)(product_1.productController.createProduct));
router.put('/update/:id', auth_1.auth, (0, async_1.asyncErrorhandling)(product_1.productController.updateProduct));
router.get('/:id', auth_1.auth, (0, async_1.asyncErrorhandling)(product_1.productController.viewProduct));
router.get('/', auth_1.auth, (0, async_1.asyncErrorhandling)(product_1.productController.listProducts));
router.delete('/:id', auth_1.auth, (0, async_1.asyncErrorhandling)(product_1.productController.deleteProduct));
exports.default = router;
//# sourceMappingURL=product.js.map