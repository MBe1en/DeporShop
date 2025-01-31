import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    if (products.length == 0) {
      return res.status(404).json({ message: `There are no products` });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const productData = new Product(req.body); //traigo datos del body
    console.log(productData);
    const { name } = productData; //destructuro email
    const productExist = await Product.findOne({ name }); //busco si existe
    if (productExist) {
      return res
        .status(400)
        .json({ message: `Product whith name "${name}" already exists` });
    }
    const savedProduct = await productData.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

export const findProduct = async (req, res) => {
  try {
    const name = req.params.name;
    const parsedName = name.trim().toLowerCase();
    const productExist = await Product.findOne({ name: parsedName });
    if (!productExist) {
      return res.status(400).json({ message: `Product ${name} not exist` });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getFilteredProducts = async (req, res) => {
  try {
    const {
      category = [],
      gender = [],
      priceMin = [],
      priceMax = [],
    } = req.query;

    let filters = {};

    if (category.length) {
      filters.category = { $in: category.split(",") };
    }

    if (gender.length) {
      filters.gender = { $in: gender.split(",") };
    }

    if (priceMin.length) {
      filters.price = {
        ...filters.price,
        $gte: parseFloat(priceMin),
      };
    }

    if (priceMax.length) {
      filters.price = {
        ...filters.price,
        $lte: parseFloat(priceMax),
      };
    }

    const products = await Product.find(filters).populate("category", "name");

    console.log(products);

    if (products.length == 0) {
      return res.status(404).json({ message: `There are no products` });
    }

    return res.status(200).json(products);

    // const products = await Product.find(filters)
    //   .populate({
    //     path: "category",
    //     match: { name: { $in: category.split(",") } }, // Este es el filtro por nombre de la categoría
    //     select: "name",  // Solo seleccionamos el nombre de la categoría
    //   });

    // // Filtramos los productos con categorías que coincidan
    // const filteredProducts = products.filter(product => product.category);

    // if (filteredProducts.length == 0) {
    //   return res.status(404).json({ message: `There are no products` });
    // }

    // return res.status(200).json(filteredProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      return res.status(400).json({ message: `Product not exist` });
    }
    res.status(200).json(productExist);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.status(201).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.findByIdAndDelete(id);
    res.status(201).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};
