import { ExpressApp } from "../server";
import {
  adminBoard,
  allAccess,
  userBoard,
} from "../controllers/user.controller";
import authJwt from "../middlewares/authJwt";

export function UserRoutes(app: ExpressApp) {
  app.use((_req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], userBoard);

  //   app.get(
  //     "/api/test/mod",
  //     [verifyToken, isModerator],
  //     moderatorBoard
  //   );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    adminBoard
  );
}
