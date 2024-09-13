import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
  // dotenv.config();

  const USERTOKENSECRET = process.env.USER_TOKEN_SECRET;
  
  return new Promise((resolve, reject) => {
    jwt.sign(payload, USERTOKENSECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) reject(err);
      console.log("TOKEN: " + token);
      resolve(token);
    });
  });
}
