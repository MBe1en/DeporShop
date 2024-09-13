// import * as Yup from "yup";
// import { Input, Label, Button, Title } from "../../components/ui";
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";

// interface Values {
//   email: string;
//   password: string;
// }

// const loginSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email"), //.required("Required"),
//   password: Yup.string().min(6, "Too Short!"), //.required("Required"),
// });

// function LoginPage() {
//   const navigate = useNavigate();

//   const redirect = (route: string, logged: boolean) => {
//     navigate(route),
//       {
//         replace: true,
//         state: {
//           logged,
//         },
//       };
//   };

  // const auth = getAuth();

  // /// Google Authenticator
  // const provider = new GoogleAuthProvider();
  // const loginWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken;
  //       const user = result.user;

  //       redirect("/", true);

  //       console.log(token);
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.customData.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);

  //       console.log(errorCode);
  //       console.log(errorMessage);
  //       console.log(email);
  //       console.log(credential);
  //     });
  // };

//   /// Auth whit email and password
//   const loginWithEmail = () => {
//     signInWithEmailAndPassword(auth, values.email, values.password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//         redirect("/", true);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   };

//   /// Show Password button
//   const [shown, setShown] = useState(false);
//   const switchShown = () => setShown(!shown);

//   /// Login button
//   const submitForm = (values: Values) => {
//     console.log(values);
//   };

//   /// Formik
//   const { handleSubmit, handleChange, errors, values } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: submitForm,
//     validationSchema: loginSchema,
//   });

//   return (
//     <>
//       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
//         <div className="border rounded-md shadow-sm shadow-indigo-800 bg-white p-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <Title>Sign in to your account</Title>

//           <div>
//             <Button type="submit" onClick={loginWithGoogle}>
//               <FcGoogle className="text-2xl mr-2 p-0.5 shadow-inner  rounded-full bg-white bg-opacity-75" />
//               Login with Google
//             </Button>
//             <div className="inline-flex items-center justify-center w-full">
//               <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
//               <span className="absolute px-2 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
//                 Or login with your email
//               </span>
//             </div>
//           </div>

//           <form
//             className="space-y-6"
//             onSubmit={handleSubmit}
//             data-te-input-wrapper-init
//           >
//             <div>
//               <Label htmlFor="email">Email address</Label>
//               <div className="mt-2">
//                 <Input
//                   id="email"
//                   type="email"
//                   name="email"
//                   value={values.email}
//                   placeholder="example@gmail.com"
//                   onChange={handleChange}
//                 />
//               </div>
//               {errors.email && (
//                 <span className="text-sm text-orange-500"> {errors.email}</span>
//               )}
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="text-sm">
//                   <a
//                     className="font-semibold hover:cursor-pointer"
//                     onClick={switchShown}
//                   >
//                     {shown ? <FaEyeSlash /> : <FaEye />}
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <Input
//                   id="password"
//                   type={shown ? "text" : "password"}
//                   name="password"
//                   value={values.password}
//                   placeholder="*********"
//                   onChange={handleChange}
//                 />
//               </div>
//               {errors.password && (
//                 <span className="text-sm text-orange-500">
//                   {" "}
//                   {errors.password}
//                 </span>
//               )}
//             </div>

//             <div>
//               <Button type="submit" onClick={loginWithEmail}>
//                 Login
//               </Button>
//             </div>
//           </form>

//           <div className="mt-5  text-center text-sm">
//             <a
//               href="#"
//               className="font-semibold tracking-wider  text-amber-400 hover:text-amber-500"
//             >
//               Forgot your password?
//             </a>
//           </div>
//           <h3 className="mt-5 text-center text-sm text-gray-500">
//             Not a member?
//             <a
//               // onClick={redirect('/register', false)}
//               className="font-semibold leading-6 tracking-wider text-amber-400 hover:text-amber-500 ml-2"
//             >
//               Register
//             </a>
//           </h3>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginPage;
