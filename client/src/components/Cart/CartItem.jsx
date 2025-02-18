import React from "react";
import { FaSquareMinus, FaSquarePlus, FaSquareXmark } from "react-icons/fa6";

function CartItem({ cartItem }) {
  const { name, brand, price, image } = cartItem;
  return (
    <div className="grid grid-cols-7 -grid-cols-[0.7fr_1.2fr_1fr_1fr_1fr_0.2fr]  gap-3 items-center">

      <div className="col-span-1">
        <div className="w-20">
          <img className="h-24" src={image} alt={name} />
        </div>
      </div>

      <div className="col-span-2">
        <span className="font-bold text-sm">{name}</span>
        <span className="text-red-500 text-xs block">{brand}</span>
      </div>

      <div className="col-span-1 flex items-center justify-center">
        <FaSquareMinus className="text-amber-400 text-lg hover:text-amber-500 hover:cursor-pointer"/>
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value="1"
        />
        <FaSquarePlus className="text-amber-400 text-lg hover:text-amber-500  hover:cursor-pointer"/>
      </div>

      <div className="col-span-1 text-center">
        <span className="font-semibold text-sm">${price}</span>
      </div>

      <div className="col-span-1 text-center">
        <span className="font-semibold text-sm">${price}</span>
      </div>

      <div className="col-span-1 text-center">
        <a
          href="#"
          className="font-semibold text-amber-400 hover:text-red-500 text-lg"
        >
          <FaSquareXmark />
        </a>
      </div>
    </div>
  );
}

export default CartItem;
