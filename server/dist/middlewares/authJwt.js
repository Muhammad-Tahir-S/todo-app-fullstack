"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_config_1 = __importDefault(require("../config/auth.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = __importDefault(require("../models"));
const User = models_1.default.user;
const Role = models_1.default.role;
const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }
    jsonwebtoken_1.default.verify(token, auth_config_1.default.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!",
            });
        }
        req.body.userId = decoded?.id;
        next();
    });
};
const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.body.userId).exec();
        if (user) {
            const roles = await Role.find({
                _id: { $in: user.roles },
            });
            if (roles) {
                for (let i = 0; i < roles.length; i++) {
                    if (roles[i].name === "admin") {
                        next();
                        return;
                    }
                }
            }
            res.status(403).send({ message: "Require Admin Role!" });
            return;
        }
    }
    catch (err) {
        res.status(500).send({ message: err });
        return;
    }
};
// const isModerator = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await User.findById(req.body.userId).exec();
//     if (user) {
//       const roles = await Role.find({
//         _id: { $in: user.roles },
//       });
//       if (roles) {
//         for (let i = 0; i < roles.length; i++) {
//           if (roles[i].name === "moderator") {
//             next();
//             return;
//           }
//         }
//       }
//       res.status(403).send({ message: "Require Admin Role!" });
//       return;
//     }
//   } catch (err) {
//     res.status(500).send({ message: err });
//     return;
//   }
// };
const authJwt = {
    verifyToken,
    isAdmin,
    // isModerator,
};
exports.default = authJwt;
