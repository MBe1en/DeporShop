import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Button, Title } from "../../components/ui/index.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/userSchema.js";

function LoginPage() {
  const { signin, isAuthenticated, authErrors } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/myAccount");
  }, [isAuthenticated]);


  const onSubmit = handleSubmit(async (values) => {
    await signin(values);
  });

  /// Show Password button
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="border rounded-md shadow-sm shadow-indigo-800 bg-white p-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Title>Sign in to your account</Title>

          <form
            onSubmit={onSubmit}
            className="mt-8 space-y-6"
            data-te-input-wrapper-init
          >
            {authErrors && (
                <span className="text-xs text-orange-500">
                  {authErrors}
                </span>
              )} 
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2">
                <Input
                  placeholder="example@gmail.com"
                  {...register("email")}
                  autoComplete="email"
                />
              </div>
              {errors.email?.message && (
                <span className="text-xs text-orange-500">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div className="text-xs">
                  <a
                    className="font-semibold hover:cursor-pointer"
                    onClick={switchShown}
                  >
                    {shown ? <FaEyeSlash /> : <FaEye />}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  type={shown ? "text" : "password"}
                  placeholder="*********"
                  {...register("password")}
                />
              </div>
              {errors.password?.message && (
                <span className="text-xs text-orange-500">
                  {errors.password?.message}
                </span>
              )}
            </div>
            <div>
              <Button>Login</Button>
            </div>

            <p className="mt-6 text-sm text-center text-neutral-800 dark:text-neutral-200">
              Don't have an account?
              <Link
                to="../register"
                className="underline ml-1 text-sm  object-center text-blue-ribbon-500"
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
