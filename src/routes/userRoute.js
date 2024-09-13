import express from "express";
import {
  register,
  login,
  logout,
  getAll,
  updateUser,
  deleteUser,
  getUser,
  verifyToken,
} from "../controllers/userController.js";
import { authRequired, isAdmin } from "../middlewares/validateTokenMW.js";
import { validateSchema } from "../middlewares/vildateSchemaMW.js";
import { registerSchema, loginSchema } from "../schemas/userSchema.js";

const userRoute = express.Router();

userRoute.post("/register", validateSchema(registerSchema), register);
userRoute.post("/login", validateSchema(loginSchema), login);
userRoute.post("/logout", logout);
// userRoute.get("/profile", authRequired, profile);
userRoute.get("/verify", verifyToken);

// userRoute.get("/getAll", isAdmin, getAll);
userRoute.get("/update/:id", authRequired, getUser);
userRoute.put("/update/:id", authRequired, updateUser);
userRoute.delete("/deleteUser/:id", authRequired, deleteUser);

export default userRoute;
