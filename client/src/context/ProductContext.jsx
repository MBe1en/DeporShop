import { createContext, useContext, useState } from "react";
import { createProductRequest, updateProductRequest, deleteProductRequest, getProductsRequest, getProductRequest } from "../api/products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const createProduct = async (product) => {
    console.log(product);
    const res = await createProductRequest(product);
    console.log(res);
  };

  const getAllProduct = async () => {
    const res = await getProductsRequest();
    setProducts(res.data);
  };

  const getProductRequest = async () => {
    const res = await getProductRequest();
    setProducts(res.data);
  };

  return (
    <ProductContext.Provider value={{ products, createProduct, getAllProduct, getProductsRequest }}>
      {children}
    </ProductContext.Provider>
  );
}
