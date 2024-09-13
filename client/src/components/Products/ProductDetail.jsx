import { useLocation } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { formatCurrency } from "../../utils/functions";

const ProductDetail = () => {
  const { state } = useLocation();
  const product = state.product;
  console.log(product);
  console.log(product.brand);
  const formattedAmount = formatCurrency(product.price, "ARS");
  return (
    <>
      <div className="w-full mt-6 flex justify-center flex-row ">
        <div className="rounded-lg overflow-hidden bg-white flex flex-col justify-center items-center shadow-lg content-between  mx-3 my-2 w-4/5 lg:flex-row ">
          <div className="content-between mx-3 my-1 lg:my-2 w-3/4 lg:w-1/2">
            <img
              className="w-5/6 mx-auto mt-3 text-transparent rounded-lg hover:cursor-pointer"
              src={product.image}
              alt="product image"
            />
          </div>
          <div className="m-8 mt-3 lg:mt-10 lg:px-11 flex flex-col justify-between items-center w-3/4 lg:w-1/2 space-y-6">
            <h1 className="mt-2 text-sm md:text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.name}
            </h1>

            <p className="text-xs md:text-lg lg:text-xl lg:py-6 text-justify text-gray-900">{product.description}</p>
            <div className="flex space-x-2 space-y-2 flex-wrap justify-center items-baseline w-full">
              <button className="w-5 h-5 rounded-full bg-blue-500  hover:bg-blue-600 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-gray-600  hover:bg-gray-700 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-green-700  hover:bg-green-800 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-red-600  hover:bg-red-700 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-yellow-500 hover:bg-yellow-600 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-green-300 hover:bg-green-400 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-gray-200 hover:bg-gray-300 duration-300"></button>
              <button className="w-5 h-5 rounded-full bg-gray-900 text-gray-100"></button>
            </div>
            <span className="text-md md:text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              {formattedAmount}
            </span>
            <a
              href="#"
              className="text-gray-900 shadow-inner bg-amber-300 hover:bg-amber-400 rounded-lg text-base px-2.5 py-2 text-center w-9"
            >
              <MdOutlineAddShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
