import React from "react";

export function ImgButton(props) {

  function handleOnClick(title) {
    console.log("click");
    console.log(title);
  }

  return (
    <div className="relative group">
      <div className="flex justify-center items-center">
        <img
          className="h-full w-1/2 lg:w-max rounded-sm shadow-xl hover:shadow-2xl"
          onClick={handleOnClick(props.title)}
          {...props}
        />
      </div>

      {/* <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-80 absolute top-0 left-0 h-full w-full">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 cursor-pointer">
          <div className="flex-row text-center">
            <h1 className="text-gray-50 font-bold text-md lg:text-lg">
              {props.title}
              
            </h1>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ImgButton;
