import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductContext";

function ProductList() {
  const { products, getAllProduct, filteredProducts } = useProducts();

  // useEffect(() => {
  //   // getAllProduct();  
  //   getProductFiltered();
  // }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-full gap-3 m-2 mt-2 p-6 sm:grid-cols-2 md:grid-cols-4 text-transparent ">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
