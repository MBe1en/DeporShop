import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email"),//.required("Required"),
  password: Yup.string().min(6, "Too Short!"),//.required("Required"),
});

function LoginPage() {
    // const [usrLogged, setUsrLogged] = useState(false)

  /// Google Authenticator
const provider = new GoogleAuthProvider();
const loginWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      // setUsrLogged(true)
  
      console.log(token)
      console.log(user)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      console.log(errorCode);
      console.log(errorMessage)
      console.log(email)
      console.log(credential)
    });
};

  /// Show Password button
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  /// Login button
  const submitForm = (values) => {
    console.log(values);
  };

  /// Formik
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema: loginSchema,
  });

  return (
    <>
      <div className="min-h-full w-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-10 border rounded-md border-gray-300 shadow-md">
          <div className="space-y-8">
            <h3 className="text-center text-2xl font-extrabold text-gray-900">
              Sign in to your account
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6 "
            data-te-input-wrapper-init
          >
            <button
              className="group relative w-full flex justify-center items-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-blue-ribbon-500  transition-colors duration-300 hover:bg-blue-ribbon-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              type="submit"
              onClick={loginWithGoogle}
            >
              <FcGoogle className="text-2xl mr-2 p-0.5 shadow-inner rounded-full bg-white bg-opacity-75" />{" "}
              Login with Google
            </button>
            <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
              ...or login whith your email{" "}
            </p>

            <input
              className="appearance-none rounded-md relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <span> {errors.email}</span>}
            <div className="flex gap-3">
              <input
                className="appearance-none rounded-md relative block
                  w-100 px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                type={shown ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={switchShown}
                className="group relative 
                py-2 px-4 border border-transparent text-lg font-medium
                rounded-md text-blue-ribbon-400 bg-ring-indigo-500 transition-colors duration-300 hover:bg-blue-ribbon-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                {shown ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <span> {errors.password}</span>}
            <button
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-blue-ribbon-500  transition-colors duration-300 hover:bg-blue-ribbon-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              type="submit"
            >
              Log In
            </button>

            <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
              Not a member?
              <Link
                to="../register"
                className="underline ml-1 object-center text-blue-ribbon-600"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
