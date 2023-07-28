"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const verifySignUp_1 = __importDefault(require("../middlewares/verifySignUp"));
const auth_controller_1 = require("../controllers/auth.controller");
function AuthRoutes(app) {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });
    app.post("/api/auth/signup", [
        verifySignUp_1.default.checkDuplicateUsernameOrEmail,
        verifySignUp_1.default.checkRolesExisted,
    ], auth_controller_1.signup);
    app.post("/api/auth/signin", auth_controller_1.signin);
}
exports.AuthRoutes = AuthRoutes;
