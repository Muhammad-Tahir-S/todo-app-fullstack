import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  HOST: "127.0.0.1",
  PORT: 27017,
  DB: process.env.ATLAS_URI || "",
};

export default dbConfig;
