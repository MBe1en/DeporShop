import mongoose from "mongoose";
import { orderSchema } from "./orderModel.js";

const cartSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  cartDetail: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});


export default mongoose.model("cart", cartSchema);
