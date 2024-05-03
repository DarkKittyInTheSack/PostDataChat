"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomId = void 0;
function getRandomId(length) {
    let result = '';
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characterLength = character.length;
    let counter = 0;
    while (counter < length) {
        result += character.charAt(Math.floor(Math.random() * characterLength));
        counter += 1;
    }
    return result;
}
exports.getRandomId = getRandomId;
//# sourceMappingURL=RandomId.js.map