import db from "../models";
import { Request, Response, NextFunction } from "express";

const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
  } catch (err) {
    res.status(500).send({ message: err });
    return;
  }
  next();
};

const checkRolesExisted = (req: Request, res: Response, next: NextFunction) => {
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

export default verifySignUp;
