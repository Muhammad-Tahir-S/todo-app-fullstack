import mongoose from "mongoose";
import User from "./user.model";
import Role from "./role.model";

mongoose.Promise = global.Promise;

const db = {} as {
  mongoose: typeof mongoose;
  user: typeof User;
  role: typeof Role;
  ROLES: ['user', 'admin'];
};

db.mongoose = mongoose;

db.user = User;
db.role = Role;

db.ROLES = ["user", "admin"];

export default db;
