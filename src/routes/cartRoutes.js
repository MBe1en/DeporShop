import express from "express";
import { authRequired, isAdmin } from "../middlewares/validateTokenMW.js";
import { validateSchema } from "../middlewares/vildateSchemaMW.js";
import { addToCart, getCart} from "../controllers/cartController.js";


const cartRoute = express.Router();

// cartRoute.post("/addToCart", verifyToken, validateSchema(cartSchema), addToCart);
cartRoute.post("/addToCart", addToCart);
cartRoute.get("/get", authRequired, getCart);

// cartRoute.get("/update/:id", authRequired, getUser);
// cartRoute.put("/update/:id", authRequired, updateUser);
// cartRoute.delete("/deleteUser/:id", authRequired, deleteUser);

export default cartRoute;
