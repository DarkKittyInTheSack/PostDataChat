"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userId = '', fullname = '', age = 0, email = '', image = null, accountId = '', description = '') {
        this.userId = userId;
        this.fullname = fullname;
        this.age = age;
        this.email = email;
        this.image = image;
        this.accountId = accountId;
        this.description = description;
    }
    getUserId() {
        return this.userId;
    }
    getFullname() {
        return this.fullname;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.email;
    }
    getImage() {
        return this.image;
    }
    getAccountId() {
        return this.accountId;
    }
    getDescription() {
        return this.description;
    }
    setUserId(userId) {
        this.userId = userId;
    }
    setFullname(fullname) {
        this.fullname = fullname;
    }
    setAge(age) {
        this.age = age;
    }
    setEmail(email) {
        this.email = email;
    }
    setImage(image) {
        this.image = image;
    }
    setAccountId(accountId) {
        this.accountId = accountId;
    }
    setDescription(description) {
        this.description = description;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map