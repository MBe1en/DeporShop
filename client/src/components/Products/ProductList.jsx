import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom"; //-----

import { useGetFilteredProducts } from "../../hooks/useProduct.jsx";

function ProductList() {
  const [searchParams] = useSearchParams();

  // Obtener los filtros desde los parámetros de búsqueda en la URL
  const category = searchParams.get("category") || "";
  const priceMin = searchParams.get("priceMin") || 0;
  const priceMax = searchParams.get("priceMax") || 1000000;
  const gender = searchParams.get("gender") || "";
  const query = `category=${category}&priceMin=${priceMin}&priceMax=${priceMax}&gender=${gender}`;

  const { isPending, isError, data, error } = useGetFilteredProducts(query);

  const products = Array.isArray(data?.data) ? data.data : [];

  console.log("products");
  console.log(products);

  if (isPending) return "Loading...";

  if (isError) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="flex justify-center">
        <div className="grid w-full gap-3 m-2 ml-6 md:ml-2 mt-2 p-6 sm:grid-cols-2 md:grid-cols-4 text-transparent ">
          {/* {isLoading && <span>fetching products...</span>}
          {isError && <span>Ups! it was an error 🚨</span>} */}

          {products.length > 0 ? (
            products.map((product) => (
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
