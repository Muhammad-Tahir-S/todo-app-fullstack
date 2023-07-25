import db from "../models";

export function mongooseConnect() {
  const Role = db.role;

  db.mongoose
    .connect(process.env.ATLAS_STRING || "", {
      dbName: "Todo-App",
    })
    .then(() => {
      console.log("Successfully connected to MongoDB.");
      initial();
    })
    .catch((err: Error) => {
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
        } catch (err) {
          console.log("error", err);
        }

        try {
          const newRoleResponse = await new Role({
            name: "admin",
          }).save();

          console.log("added 'admin' to roles collection", newRoleResponse);
        } catch (err) {
          console.log("error", err);
        }
      }

      console.log(roleCount + "roles exist");
    } catch (err) {
      console.log("failed to get existing role count");
    }
  }
}
