"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const models_1 = __importDefault(require("../models"));
const auth_config_1 = __importDefault(require("../config/auth.config"));
const User = models_1.default.user;
const Role = models_1.default.role;
const signup = async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcryptjs_1.default.hashSync(req.body.password, 8),
    });
    try {
        await user.save();
        if (req.body.roles) {
            const userRoles = await Role.find({
                name: { $in: req.body.roles },
            });
            user.roles = userRoles.map((role) => role._id);
            await user.save();
            res.send({ message: "User was registered successfully!" });
        }
        else {
            const userRole = await Role.findOne({ name: "user" });
            if (userRole) {
                user.roles = [userRole._id];
                await user.save();
                res.send({ message: "User was registered successfully!" });
            }
        }
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
};
exports.signup = signup;
const signin = async (req, res) => {
    try {
        const userInDb = await User.findOne({
            username: req.body.username,
        })
            .populate("roles", "-__v")
            .exec();
        if (!userInDb) {
            return res.status(404).send({ message: "User Not found." });
        }
        const isPasswordValid = bcryptjs_1.default.compareSync(req.body.password, userInDb.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!",
            });
        }
        const token = jsonwebtoken_1.default.sign({ id: userInDb.id }, auth_config_1.default.secret, {
            algorithm: "HS256",
            allowInsecureKeySizes: true,
            expiresIn: 86400, // 24 hours
        });
        const authorities = [];
        const userRoles = userInDb.roles;
        for (let i = 0; i < userRoles.length; i++) {
            authorities.push("ROLE_" + userRoles[i]?.name.toUpperCase());
        }
        res.status(200).send({
            id: userInDb._id,
            username: userInDb.username,
            email: userInDb.email,
            roles: authorities,
            accessToken: token,
        });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
};
exports.signin = signin;
