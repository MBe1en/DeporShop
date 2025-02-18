import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    _product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },

    price: {
      type: Number,
    },

    quantity: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
    },
  },
  { versionKey: false, _id: false }
);

export {orderSchema};
export default mongoose.model("order", orderSchema);
