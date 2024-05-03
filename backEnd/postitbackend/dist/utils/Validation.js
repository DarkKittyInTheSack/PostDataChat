"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const MessageUtils_1 = require("./MessageUtils");
class Validation {
    checkNullData(data) {
        if (data === '') {
            return MessageUtils_1.REQUIRED_DATA;
        }
        return '';
    }
    checkEmailType(data) {
        if (!data.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return MessageUtils_1.INVALID_EMAIL;
        }
        return '';
    }
    checkPhoneNumber(data) {
        if (!data.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
            return MessageUtils_1.INVALID_PHONE_NUMBER;
        }
        return '';
    }
    checkDataLength(maxLength, minLength, inputData) {
        if (inputData.length > maxLength) {
            return MessageUtils_1.DATA_MAX_LENGTH + maxLength;
        }
        if (inputData.length < minLength) {
            return MessageUtils_1.DATA_MIN_LENGTH + minLength;
        }
        return '';
    }
}
exports.Validation = Validation;
//# sourceMappingURL=Validation.js.map