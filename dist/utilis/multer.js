"use strict";
const tslib_1 = require("tslib");
const multer = tslib_1.__importStar(require("multer"));
const path = tslib_1.__importStar(require("path"));
const storage = multer.diskStorage({
    filename(req, file, cb) {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    },
});
module.exports = storage;
//# sourceMappingURL=multer.js.map