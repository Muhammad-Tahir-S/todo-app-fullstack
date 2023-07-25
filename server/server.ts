import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AuthRoutes } from "./routes/auth.routes";
import { UserRoutes } from "./routes/user.routes";
import { mongooseConnect } from "./utils/mongooseConnect";

dotenv.config();

const app = express();

export type ExpressApp = typeof app;

var corsOptions = {
  origin: "http://localhost:8081",
};

mongooseConnect();

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (res: Response) => {
  res.json({ message: "Welcome to todo application." });
});

AuthRoutes(app);
UserRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
