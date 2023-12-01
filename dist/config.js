"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv_1 = require("dotenv");
const { env } = process;
(0, dotenv_1.config)({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.config = {
    JWT: env.JWT_SECRET,
    PORT: parseInt(env.PORT, 10) || 8000,
    MONGODBURI: env.MONGODBURI,
    REDIS_HOST: env.REDIS_HOST,
    REDIS_PASSWORD: env.REDIS_PASSWORD,
    CLOUDINARY_CLOUD_NAME: env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_SECRET: env.CLOUDINARY_API_SECRET,
    CLOUDINARY_API_KEY: env.CLOUDINARY_API_KEY,
    REDIS_PORT: parseInt(env.REDIS_PORT)
};
//# sourceMappingURL=config.js.map