import { ExpressApp } from "..";
import verifySignUp from "../middlewares/verifySignUp";
import { signin, signup } from "../controllers/auth.controller";

export function AuthRoutes(app: ExpressApp) {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    signup
  );

  app.post("/api/auth/signin", signin);
}
