"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseApi = void 0;
const responseApi = (result, message) => {
    return JSON.stringify({
        message: message,
        data: result
    });
};
exports.responseApi = responseApi;
//# sourceMappingURL=response.js.map