import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCheck, FaUserPlus, FaUserCircle } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, user } = useAuth();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, []);

  return (
    <>
      {/* <nav className="relative flex flex-wrap items-center justify-between bg-slate-900 rounded-b-3xl shadow-lg shadow-slate-800 h-20 lg:h-32  "> */}
      <nav className="relative flex flex-wrap items-center justify-between bg-black rounded-b-3xl shadow-lg shadow-slate-800 h-20 lg:h-32  ">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="w-full h-20 relative flex justify-between lg:w-auto lg:static lg:justify-center lg:h-32 ">
            <Link to="/" className="flex items-center gap-1.5 md:gap-7 my-auto">
              <img src="/assets/logo5.png" className="h-20 lg:h-28 p-3"></img>
              <span className="text-amber-300 text-lg md:text-2xl lg:text-3xl font-galada-cursive ">
                DeporShop
              </span>
            </Link>
          </div>
          <div className="mt-26rounded-xl shadow-lg flex flex-row ml-auto justify-end">
            {isAuthenticated ? (
              <>
                <Link
                  to="./myAccount"
                  className="hidden md:block nav-item text-md px-4 py-1.5 text-amber-300 lg:text-3xl lg:py-1 lg:px-3 lg:m-1 lg:transition-colors lg:duration-300 lg:shadow-inner"
                >
                  Welcome {userName}
                </Link>
                <Link
                  to="./myAccount"
                  className="block md:hidden nav-item text-xl px-4 py-1.5 text-amber-300 lg:text-4xl lg:py-1 lg:px-3 lg:m-1 lg:transition-colors lg:duration-300 lg:shadow-inner"
                >
                  <FaUserCircle />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="./login"
                  className="hidden md:block nav-item text-sm mx-1 px-4 py-1 lg:text-3x1 bg-amber-300 text-black lg:m-1 transition-colors duration-300 hover:bg-amber-400 rounded-full shadow-inner"
                >
                  Login
                </Link>
                <Link
                  to="./register"
                  className="hidden md:block nav-item text-sm mx-1 px-4 py-1 lg:text-3x1 bg-amber-300 text-black lg:m-1 transition-colors duration-300 hover:bg-amber-400 rounded-full shadow-inner"
                >
                  Register
                </Link>
                <Link
                  to="./login"
                  className="block md:hidden nav-item text-sm mx-1 px-2 py-2 lg:text-3x1 bg-amber-300 text-black transition-colors duration-300 hover:bg-amber-400 rounded-full shadow-inner"
                >
                  <FaUserCheck />
                </Link>
                <Link
                  to="./register"
                  className="block md:hidden nav-item text-sm mx-1 px-2 py-2 lg:text-3x1 bg-amber-300 text-black transition-colors duration-300 hover:bg-amber-400 rounded-full shadow-inner"
                >
                  <FaUserPlus />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
