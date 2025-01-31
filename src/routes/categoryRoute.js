// import express from "express";
import { Router } from "express";
import {
  create,
  deleteCategory,
  getAll,
  update,
} from "../controllers/categoryController.js";
import { authRequired } from "../middlewares/validateTokenMW.js";

const categoryRoute = Router();

categoryRoute.get("/getAll", getAll);
categoryRoute.post("/create", authRequired, create);
categoryRoute.put("/update/:id", authRequired, update);
categoryRoute.delete("/deleteCategory/:id", authRequired, deleteCategory);

export default categoryRoute;
