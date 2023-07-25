import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import db from "../models";
import authConfig from "../config/auth.config";
import { ObjectId } from "mongoose";

const User = db.user;
const Role = db.role;

export const signup = async (req: Request, res: Response) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
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
    } else {
      const userRole = await Role.findOne({ name: "user" });

      if (userRole) {
        user.roles = [userRole._id];
        await user.save();
        res.send({ message: "User was registered successfully!" });
      }
    }
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const userInDb = await User.findOne({
      username: req.body.username,
    })
      .populate("roles", "-__v")
      .exec();

    if (!userInDb) {
      return res.status(404).send({ message: "User Not found." });
    }

    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      userInDb.password
    );

    if (!isPasswordValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: userInDb.id }, authConfig.secret, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: 86400, // 24 hours
    });

    const authorities = [];
    const userRoles = userInDb.roles as unknown as {
      _id: ObjectId;
      name: string;
    }[];

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
  } catch (err) {
    res.status(500).send({ message: err });
  }
};
