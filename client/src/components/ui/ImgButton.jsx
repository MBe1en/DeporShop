import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ImgButton(props) {

  const navigate = useNavigate();
  function handleOnClick() {
    console.log("click");
    console.log(props.id);
    navigate(`/product?category=${props.id}`);
  }

  return (
    <div className="relative group">
      <div className="flex justify-center items-center hover:cursor-pointer ">
        <img
          className="h-full w-1/2 lg:w-max rounded-sm shadow-xl hover:shadow-2xl"
          onClick={handleOnClick}
          {...props}
        />
      </div>

      <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-80 absolute top-0 left-0 h-full w-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100 ">
          <div className="flex-row text-center">
            <h1 className="text-gray-50 font-bold text-md lg:text-lg">
              {props.title}      
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgButton;
