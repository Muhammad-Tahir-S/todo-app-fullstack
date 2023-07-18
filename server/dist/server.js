"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = __importDefault(require("./models"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
var corsOptions = {
    origin: "http://localhost:8081",
};
app.use((0, cors_1.default)(corsOptions));
// parse requests of content-type - application/json
app.use(express_1.default.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
const Role = models_1.default.role;
models_1.default.mongoose
    .connect(process.env.ATLAS_STRING || "", {
    dbName: "Todo-App",
})
    .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
})
    .catch((err) => {
    console.error("Connection error", err);
    process.exit();
});
async function initial() {
    try {
        const roleCount = await Role.estimatedDocumentCount();
        if (roleCount === 0) {
            try {
                const newRoleResponse = await new Role({
                    name: "user",
                }).save();
                console.log("added 'user' to roles collection", newRoleResponse);
            }
            catch (err) {
                console.log("error", err);
            }
            try {
                const newRoleResponse = await new Role({
                    name: "admin",
                }).save();
                console.log("added 'admin' to roles collection", newRoleResponse);
            }
            catch (err) {
                console.log("error", err);
            }
        }
        console.log("roles exist", roleCount);
    }
    catch (err) {
        console.log("failed to get existing role count");
    }
}
app.get("/", (req, res) => {
    res.json({ message: "Welcome to todo application." });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
