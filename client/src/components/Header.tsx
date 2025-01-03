import React from "react";
import { Link, Outlet } from "react-router-dom";
//  import logo5 from "/assets/logo5.png"; 

function Header() {
  return (
    <div className="sticky">

      <header className="w-full  bg-slate-900 rounded-b-3xl shadow-lg shadow-slate-800 flex items-center justify-between flex-wrap sm:px-2 lg:px-8 h-32  ">
        <Link to="/" className="flex items-center gap-7">
        
            <img src="/assets/logo5.png" className="w-1/4 h-1/4 p-1"></img> 
            <span className="text-amber-300 text-3xl font-galada-cursive">DeporShop</span>
          
        </Link>

        <nav className="hidden md:flex justify-around gap-3">
          <Link
            to="./login"
            className="bg-amber-300 text-gray-900 py-1 px-3 transition-colors duration-300 hover:bg-amber-400 rounded-full shadow-inner"
          >
            Login
          </Link>
          <Link
            to="./register"
            className="bg-amber-300 text-gray-900  py-1 px-3  transition-colors duration-300 hover:bg-amber-400  rounded-full shadow-inner"
          >
            Register
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
