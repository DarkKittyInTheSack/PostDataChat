"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    const imageType = ['image/jpeg', 'image/png', 'image/jpg'];
    if (imageType.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        const res = {
            status: 400,
            description: 'Bad request',
            result: 'Only JPEG and PNG required'
        };
        cb(JSON.stringify(res, null, 2), false);
    }
};
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter
});
exports.default = upload;
//# sourceMappingURL=multer.middleware.js.map