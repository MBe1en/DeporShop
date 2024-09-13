import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductContext";

function ProductList() {
  const { products, getAllProduct } = useProducts();

  useEffect(() => {
    getAllProduct();  
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-full gap-3 m-2 mt-6 p-6 sm:grid-cols-2 md:grid-cols-4 text-transparent ">
          {products.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
