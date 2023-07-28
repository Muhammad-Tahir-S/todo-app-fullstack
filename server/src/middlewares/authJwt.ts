import { Request, Response, NextFunction } from "express";
import authConfig from "../config/auth.config";
import jwt from "jsonwebtoken";
import db from "../models";

const User = db.user;
const Role = db.role;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers["x-access-token"] as string;

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.body.userId = (decoded as { id: string } & typeof decoded)?.id;
    next();
  });
};

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
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
  } catch (err) {
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

export default authJwt;
