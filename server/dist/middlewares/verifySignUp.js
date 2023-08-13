"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const ROLES = models_1.default.ROLES;
const User = models_1.default.user;
const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const useranameUser = await User.findOne({
            username: req?.body?.username,
        }).exec();
        if (useranameUser) {
            res?.status(400).send({ message: "Failed! Username is already in use!" });
            return;
        }
        const emailUser = await User.findOne({
            email: req?.body?.email,
        }).exec();
        if (emailUser) {
            res?.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }
    }
    catch (err) {
        res.status(500).send({ message: err });
        return;
    }
    next();
};
const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: `Failed! Role ${req.body.roles[i]} does not exist!`,
                });
                return;
            }
        }
    }
    next();
};
const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted,
};
exports.default = verifySignUp;
