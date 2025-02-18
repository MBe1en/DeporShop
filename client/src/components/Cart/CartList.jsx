import React from "react";
import CartItem from "./CartItem";

function CartList() {
  const cartItems = [
    {
      name: "Zapatillas Recharged",
      brand: "Puma",
      image:
        "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-puma-slipstream-leather-blanca-19514004-640010389021014-1.jpg",
      price: 290000,
    },
    {
      name: "Zapatillas Adidas Nosecuánto",
      brand: "Adidas",
      image:
        "https://media2.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/z/a/zapatillas-puma-slipstream-leather-blanca-19514004-640010389021014-1.jpg",
      price: 590000,
    },
  ];
  console.log(cartItems);
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            <div className="grid grid-cols-7 gap-3 items-center mt-2">
              <div className="col-span-3">
                <h3 className="font-semibold text-gray-600 text-xs uppercase ">
                  Product Details
                </h3>
              </div>
              <div className="col-span-1">
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">
                  Quantity
                </h3>
              </div>
              <div className="col-span-1">
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">
                  Price
                </h3>
              </div>
              <div className="col-span-1">
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase">
                  Total
                </h3>
              </div>
            </div>
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.name}></CartItem>
            ))}
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
