import express, { Request, Response } from "express";
import dotenv from "dotenv";
import db from "./models";
import cors from "cors";

dotenv.config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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

    console.log("roles exist", roleCount);
  } catch (err) {
    console.log("failed to get existing role count");
  }
}

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to todo application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
