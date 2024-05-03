"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Award = void 0;
class Award {
    constructor(awardId = '', awardName = '') {
        this.awardId = awardId;
        this.awardName = awardName;
    }
    getAwardId() {
        return this.awardId;
    }
    getAwardName() {
        return this.awardName;
    }
    setAwardId(awardId) {
        this.awardId = awardId;
    }
    setAwardName(awardName) {
        this.awardName = awardName;
    }
}
exports.Award = Award;
//# sourceMappingURL=Award.js.map