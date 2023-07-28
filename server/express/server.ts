"use strict";

import { Request, Response } from "express";

const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");

const router = express.Router();
router.get("/", (req: Request, res: Response) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});

router.get("/another", (req: Request, res: Response) =>
  res.json({ route: req.originalUrl })
);
router.post("/", (req: Request, res: Response) =>
  res.json({ postBody: req.body })
);

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../index.html"))
);

module.exports = app;
module.exports.handler = serverless(app);