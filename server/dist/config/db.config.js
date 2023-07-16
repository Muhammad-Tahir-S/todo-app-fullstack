"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig = {
    HOST: "127.0.0.1",
    PORT: 27017,
    DB: process.env.ATLAS_URI || "",
};
module.exports = dbConfig;
