"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = require("./routes/auth.routes");
const user_routes_1 = require("./routes/user.routes");
const mongooseConnect_1 = require("./utils/mongooseConnect");
dotenv_1.default.config();
const app = (0, express_1.default)();
var corsOptions = {
    origin: "http://localhost:8081",
};
(0, mongooseConnect_1.mongooseConnect)();
app.use((0, cors_1.default)(corsOptions));
// parse requests of content-type - application/json
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (res) => {
    res.json({ message: "Welcome to todo application." });
});
(0, auth_routes_1.AuthRoutes)(app);
(0, user_routes_1.UserRoutes)(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
