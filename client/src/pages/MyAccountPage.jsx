import { Link } from "react-router-dom";
import { Input, Label, Button, Title } from "../components/ui/index.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect, useState } from "react";

function MyAccountPage() {
  const { logout, user, getUser } = useAuth();

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="border rounded-md shadow-sm shadow-indigo-800 bg-white p-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Title>My account</Title>

          <div className="m-2 ">
            <Link
              to = {`../update/` + user.id}
              className="flex w-full justify-center rounded-sm bg-amber-300 tracking-wider px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-md hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Profile
            </Link>
          </div>
          <div className="m-2 ">
            <Link
              to="/orders"
              className="flex w-full justify-center rounded-sm bg-amber-300 tracking-wider px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-md hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Orders
            </Link>
          </div>
          <div className="m-2 ">
            <Link
              to="/"
              className="flex w-full justify-center rounded-sm bg-amber-300 tracking-wider px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-md hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Returns
            </Link>
          </div>
          <div className="m-2 ">
            <Link
              to="/"
              className="flex w-full justify-center rounded-sm bg-amber-300 tracking-wider px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-md hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Gift Cards
            </Link>
          </div>

          <div className="m-2 ">
            <Link
              to="/"
              className="flex w-full justify-center rounded-sm bg-amber-300 tracking-wider px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-md hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              onClick={() => logout()}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAccountPage;
