import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

export const getCart = async (req, res) => {
  try {
    const cartExist = await Cart.findOne({ _userId: req._userId }).populate(
      populateProduct
    );
    console.log(cartExist);
    if (!cartExist) {
      return res.status(400).json({ message: `Cart not exist` });
    }
    res.status(200).json(cartExist);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error CARRITO getCart", error });
  }
};

export const addToCart = async (req, res) => {
  try {
    console.log("addToCart req.body");
    console.log(req.body);

    const populateProduct = {
      path: "cartDetail",
      populate: {
        path: "_product",
        model: "Product",
        populate: {
          path: "_category",
          model: "Category",
        },
      },
    };

    const userCartFound = await Cart.findOne({ _userId: req.body._userId });
    const productFound = await Product.findById(req.body._product);

    const cartDetail = {
      _product: req.body._product,
      quantity: req.body.quantity,
      price: req.body.price,
      amount: req.body.amount,
    };

    console.log("productFound");
    console.log(productFound);
    console.log("userCartFound");
    console.log(userCartFound);

    if (userCartFound) {
      // Busco el producto en el carrito del usuario
      const cart = Cart.findOneAndUpdate(
        {
          _userId: req._userId,
          "cartDetail._product": req.body._product,
        },
        {
          $inc: {
            "cartDetail.$.quantity": req.body.quantity,
            "cartDetail.$.amount": productFound.price * req.body.quantity,
          },
        },
        { new: true }
      ).populate(populateProduct);
      console.log("cart");
      console.log(cart);
      // Si el producto no está en el carrito, lo agrego
      if (!cart) {
        cart = Cart.findOneAndUpdate(
          {
            _userId: req._userId,
          },
          {
            $push: {
              cartDetail: {
                ...cartDetail,
              },
            },
          },
          { new: true }
        ).populate(populateProduct);
      }

      // Si el carrito no existe, lo creo
      if (!cart) {
        const newCart = new Cart({
          _userId: req._userId,
          cartDetail,
        });
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error CARRITO addToCart", error });
  }
};
