"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnect = void 0;
const models_1 = __importDefault(require("../models"));
function mongooseConnect() {
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
            console.log(roleCount + "roles exist");
        }
        catch (err) {
            console.log("failed to get existing role count");
        }
    }
}
exports.mongooseConnect = mongooseConnect;
