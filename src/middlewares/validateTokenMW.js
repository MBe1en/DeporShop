import jwt from "jsonwebtoken";
// import Cookies from "js-cookies";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  console.log("tokenMW: " + token);

  if (!token)
    return res.status(401).json({ message: "Access token not provided" });

  jwt.verify(token, process.env.USER_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = user;

    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};



// import jwt from "jsonwebtoken";

// export const authRequired = (req, res, next) => {
//   const { token } = req.cookies;
//   console.log("tokenMW: " + token);

//   if (!token)
//     return res.status(401).json({ message: "Access token not provided" });

//   jwt.verify(token, process.env.USER_TOKEN_SECRET, (err, user) => {
//     if (err) return res.status(401).json({ message: "Invalid token" });
//     req.user = user;

//     next();
//   });
// };

// export const isAdmin = (req, res, next) => {
//   if (req.user.role !== "admin") {
//     return res.status(401).json({ error: "Unauthorized" });
//   }
//   next();
// };
