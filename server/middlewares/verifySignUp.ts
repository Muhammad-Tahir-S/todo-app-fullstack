import db from "../models";
import { Request, Response, NextFunction } from "express";

const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  User.findOne({
    username: req?.body?.username ,
  })
    .exec()
    .then((_response) => {
      res?.status(400).send({ message: "Failed! Username is already in use!" });

      User.findOne({
        email: req?.body?.email,
      })
        .exec()
        .then((_response) => {
          res
            ?.status(400)
            .send({ message: "Failed! Email is already in use!" });
          next();

          return;
        })
        .catch((err) => {
          res.status(500).send({ message: err });
          return;
        });

      next();
      return;
    })
    .catch((err) => {
      res.status(500).send({ message: err });
      return;
    });
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
