import React from "react";
import { FaRegFaceFrown } from "react-icons/fa6";

function ErrorMsg(error) {
  console.log(error);
  console.log(error.error);
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 ">
      <div className="flex flex-col items-center transform -translate-y-10 -translate-x-2 lg:translate-x-16">
        <div className="text-5xl my-2 ">
          <FaRegFaceFrown />
        </div>
        <p className="w-full h-8 text-center mt-2 ">An error has occurred</p>

        <p className="w-full h-8 text-center ">{error.error}</p>
      </div>
    </div>
  );
}

export default ErrorMsg;
