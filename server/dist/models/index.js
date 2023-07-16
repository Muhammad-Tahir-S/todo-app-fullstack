"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.Promise = global.Promise;
const db = {};
db.mongoose = mongoose_1.default;
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin"];
module.exports = db;
