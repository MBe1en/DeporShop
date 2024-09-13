import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  findProduct,
  updateProduct,
} from "../controllers/productController.js";
import { authRequired } from "../middlewares/validateTokenMW.js";

const productRoute = Router();

productRoute.get("/getAll", getProducts);
productRoute.get("/get/:name", findProduct);
productRoute.get("/detail", getProduct);
// productRoute.post("/create", authRequired, create);
productRoute.post("/create", createProduct);
productRoute.put("/update/:id", authRequired, updateProduct);
productRoute.delete("/delete/:id", authRequired, deleteProduct);

export default productRoute;
