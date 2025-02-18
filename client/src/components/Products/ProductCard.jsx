import React from "react";

import { useNavigate } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { formatCurrency } from "../../utils/functions";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/product/detail", { state: { product } });
  };

  const formattedAmount = formatCurrency(product.price, "ARS");

  return (
    // <div className="rounded-lg overflow-hidden bg-gray-100 shadow-lg flex flex-col justify-center content-between mx-3 my-2">
    <div className="rounded-lg overflow-hidden bg-white shadow-lg flex flex-col justify-center content-between mx-3 my-2">
      <img
        className="w-11/12 mx-auto mt-3 rounded-lg hover:cursor-pointer"
        src={product.image}
        alt="product image"
        onClick={handleDetail}
      />

      <h1 className="m-4 mt-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.name}
      </h1>
      <div className="m-4 mt-auto">
        <div className="flex items-center justify-between ">
          <span className="text-sm font-bold text-gray-900 dark:text-white">
            {/* $ {product.price} */}
            {formattedAmount}
          </span>
          <a
            href="/cart"
            className="text-gray-900 shadow-inner bg-amber-300 hover:bg-amber-400 rounded-lg text-base px-2.5 py-2 text-center "
          >
            <MdOutlineAddShoppingCart />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
