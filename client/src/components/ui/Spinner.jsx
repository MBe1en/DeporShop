import React from "react";

function Spinner() {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 ">
      <div className="relative transform -translate-y-20 -translate-x-4 lg:translate-x-16">
        <div
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-full absolute
                            border-4 border-solid border-amber-200"
        ></div>

        <div
          className="w-8 h-8 lg:w-12 lg:h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-slate-800 border-t-transparent shadow-md"
        ></div>
      </div>
    </div>
  );
}

export default Spinner;
