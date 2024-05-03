"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const buffer_to_stream_1 = __importDefault(require("buffer-to-stream"));
const dotenv_1 = __importDefault(require("dotenv"));
const cloudinary_1 = __importDefault(require("cloudinary"));
dotenv_1.default.config();
const cloudinaries = cloudinary_1.default.v2;
cloudinaries.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});
async function uploadFile(file) {
    return new Promise((resolve, reject) => {
        const upload = cloudinaries.uploader.upload_stream((err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
        (0, buffer_to_stream_1.default)(file.buffer).pipe(upload);
    });
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=cloudinary.js.map