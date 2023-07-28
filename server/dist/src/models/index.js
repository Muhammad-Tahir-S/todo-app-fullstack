"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("./user.model"));
const role_model_1 = __importDefault(require("./role.model"));
mongoose_1.default.Promise = global.Promise;
const db = {};
db.mongoose = mongoose_1.default;
db.user = user_model_1.default;
db.role = role_model_1.default;
db.ROLES = ["user", "admin"];
exports.default = db;
