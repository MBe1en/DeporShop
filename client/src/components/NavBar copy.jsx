import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
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
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full h-20 relative flex justify-between lg:w-auto lg:static lg:justify-center lg:h-32 ">
            <Link to="/" className="flex items-center gap-7 my-auto">
              <img src="/assets/logo5.png" className="h-20 lg:h-28 p-3"></img>
              <span className="text-amber-300 text-2xl lg:text-3xl font-galada-cursive ">
                DeporShop
              </span>
            </Link>
            <button
              className="text-amber-300 text-2xl cursor-pointerleading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <IoMenu />
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <div
              className={
                "mt-26rounded-xl shadow-lg flex lg:flex-row lg:ml-auto lg:justify-end" +
                (navbarOpen ? "w-26 py-2 flex-col mt-10 z-50" : "")
              }
            >
              {isAuthenticated ? (
                <>
                  <Link
                    to="./myAccount"
                    className="hiddennav-item text-lg px-4 py-1.5 text-amber-300 lg:text-3x1 lg:py-1 lg:px-3 lg:m-1 lg:transition-colors lg:duration-300 lg:shadow-inner"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    Welcome {userName}
                  </Link>
                  <Link
                    to="./myAccount"
                    className="nav-item text-lg px-4 py-1.5 text-amber-300 lg:text-3x1 lg:py-1 lg:px-3 lg:m-1 lg:transition-colors lg:duration-300 lg:shadow-inner"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    Welcome {userName}
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="./login"
                    className="nav-item text-xs px-4 py-1.5 text-amber-300 lg:text-3x1 lg:bg-amber-300 lg:text-gray-900 lg:py-1 lg:px-3 lg:m-1 lg:transition-colors lg:duration-300 hover:bg-amber-400 lg:rounded-full lg:shadow-inner"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    Login
                  </Link>
                  <Link
                    to="./register"
                    className="nav-item text-xs px-4 py-1.5 text-amber-300 lg:text-3x1 lg:bg-amber-300 lg:text-gray-900 lg:py-1 lg:px-3 lg:m-1 lg:transition-colors lg:duration-300 hover:bg-amber-400 lg:rounded-full lg:shadow-inner"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
