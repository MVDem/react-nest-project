"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
async function hashPassword(pass) {
    const hashPassword = await bcrypt.hash(pass, 5);
    return hashPassword;
}
exports.default = hashPassword;
//# sourceMappingURL=index.js.map