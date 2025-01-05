import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useProducts } from "../../context/ProductContext";

function ProductList() {
  const { filteredProducts, products } = useProducts();

  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-full gap-3 m-2 ml-6 md:ml-2 mt-2 p-6 sm:grid-cols-2 md:grid-cols-4 text-transparent ">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard product={product} key={product._id}></ProductCard>
            ))
          ) : (
            <>
              {/* Message when no products match the filter */}
              <div className="flex flex-col justify-center items-center col-span-full mt-8">
                <p className="text-black text-3xl text-center mx-8">
                  No hay productos que coincidan con el criterio de búsqueda.
                </p>
                <p className="text-black text-3xl text-center mx-8 mt-6">
                  TODOS LOS PRODUCTOS
                </p>
              </div>

              {/* Show all products as fallback */}
              <div className="grid w-full gap-3 ml-6 md:ml-2 p-6 sm:grid-cols-2 sm:col-span-2 md:grid-cols-4 md:col-span-4 text-transparent">
                {products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductList;
