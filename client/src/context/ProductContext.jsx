import { createContext, useContext, useEffect, useState } from "react";
import {
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
  getProductsRequest,
} from "../api/products";

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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceMin: 0,
    priceMax: 999999,
    gender: "",
  });

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

  useEffect(() => {
    getAllProduct();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = products;

      // Filter by category
      console.log(filters.categories)
      if (filters.categories.length > 0) {
        filtered = products.filter(product =>
          product.category?.name && 
          filters.categories
            .map(category => category.toLowerCase()) // Convierte todas las categorías a minúsculas
            .includes(product.category.name.toLowerCase()) // Compara en minúsculas
        );
        console.log("filtered");
        console.log(filtered);
      }

      // // Filter by price range
      // filtered = filtered.filter(
      //   (product) =>
      //     product.price >= filters.priceMin && product.price <= filters.priceMax
      // );

      // // Filter by gender
      // if (filters.gender) {
      //   filtered = filtered.filter((product) =>
      //     // console.log(product.gender)
      //     product.gender.toLowerCase().includes(filters.gender.toLowerCase())
      //   );
      // }

      setFilteredProducts(filtered); // Update the filtered products list
    };

    applyFilters();
    console.log("filteredProducts");
    console.log(filteredProducts)
  }, [filters, products]);

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        getAllProduct,
        getProductsRequest,
        filteredProducts,
        setFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
