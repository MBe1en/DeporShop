import { createContext, useContext, useEffect, useState } from "react";
import {
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
  getProductsRequest,
  getProductsFilteredRequest,
} from "../api/products";
import { getFilteredProducts } from "../../../src/controllers/productController";

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
    orderBy: "",
    categories: [],
    priceMin: 0,
    priceMax: 9999999,
    genders: [],
  });

  useEffect(() => {
    getAllProduct();
  }, []);

  // useEffect(() => {
  //   getProductsFilteredRequest();
  // }, [filters]);

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

  const getProductsFilteredRequest = async (query) => {
    const res = await getProductsFilteredRequest(query);
    setFilteredProducts(res.data);
  }




   /* Javascript filters
  useEffect(() => {
   const applyFilters = () => {
      let filtered = products;

      // Order by
      console.log("orderBy");
      console.log(filtered);
      console.log(filters.orderBy);
      // numbersArr.sort((a, b) => a - b);
      if (filters.orderBy === "priceASC") {
        filtered.sort((a, b) => a.price - b.price);
      }
      if (filters.orderBy === "priceDESC") {
        filtered.sort((a, b) => b.price - a.price);
      }
      if (filters.orderBy === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      // Filter by category
      console.log(filters.categories);
      if (filters.categories.length > 0) {
        filtered = products.filter(
          (product) =>
            product.category?.name &&
            filters.categories
              .map((category) => category.toLowerCase()) // Convierte todas las categorías a minúsculas
              .includes(product.category.name.toLowerCase()) // Compara en minúsculas
        );
        console.log("filtered category");
        console.log(filtered);
      }

      // Filter by price range
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceMin && product.price <= filters.priceMax
      );
      console.log("filtered price");
      console.log(filters.priceMin);
      console.log(filters.priceMax);
      console.log(filtered);

      // Filter by gender
      console.log(filters.genders);
      if (filters.genders.length > 0) {
        filtered = products.filter((product) =>
          filters.genders
            .map((gender) => gender.toLowerCase())
            .includes(product.gender.toLowerCase())
        );
        console.log("filtered gender");
        console.log(filtered);
      }

      setFilteredProducts(filtered); // Update the filtered products list
    };

    applyFilters();
    console.log("filteredProducts");
    console.log(filteredProducts);
  }, [filters, products]);
*/

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        getAllProduct,
        getProductsRequest,
        filteredProducts,
        getProductsFilteredRequest,
        setFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
