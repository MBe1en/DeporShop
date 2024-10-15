import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input, Label, Button, Title } from "../../components/ui";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { registerSchema } from "../../schemas/userSchema.js";

function RegisterPage() {
  const { signup, isAuthenticated, authErrors, getUser } =
    useAuth();
  const { id } = useParams();
  console.log(id);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (id) {
        const user = await getUser(id);
        setValue("name", user.name);
        setValue("lastName", user.lastName);
        setValue("email", user.email);
        setValue("password", user.password);
        setValue("address", user.address);
        setValue("city", user.city);
        setValue("province", user.province);
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    if (isAuthenticated && !id) navigate("/myAccount");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    console.log("signup");
    await signup(values);
  });

  /// Show Password button
  const [shownP, setShownP] = useState(false);
  const switchShownP = () => setShownP(!shownP);
  const [shownCP, setShownCP] = useState(false);
  const switchShownCP = () => setShownCP(!shownCP);


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="border rounded-md shadow-sm shadow-indigo-800 bg-white p-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Title>Create an account</Title>
          {/* {authErrors.map((error, i) => (
            <span className="text-xs text-orange-500">
              {error} key={i}
            </span>
          ))} */}
          <form
            onSubmit={onSubmit}
            className="mt-5 space-y-4"
            data-te-input-wrapper-init
          >
            {authErrors && (
              <span className="text-xs text-orange-500">{authErrors}</span>
            )}
            <div>
              <Label htmlFor="name">Name</Label>
              <div className="mt-1">
                <Input
                  placeholder="First Name"
                  {...register("name")}
                  autoComplete="name"
                />
              </div>

              {errors.name?.message && (
                <span className="text-xs text-orange-500">
                  {errors.name?.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <div className="mt-1">
                <Input
                  placeholder="Last Name"
                  {...register("lastName")}
                  autoComplete="lastName"
                />
              </div>
              {errors.lastName?.message && (
                <span className="text-xs text-orange-500">
                  {errors.lastName?.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-1">
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
                    onClick={switchShownP}
                  >
                    {shownP ? <FaEyeSlash /> : <FaEye />}
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <Input
                  type={shownP ? "text" : "password"}
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
              <div className="flex items-center justify-between">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="text-xs">
                  <a
                    className="font-semibold hover:cursor-pointer"
                    onClick={switchShownCP}
                  >
                    {shownCP ? <FaEyeSlash /> : <FaEye />}
                  </a>
                </div>
              </div>
              <div className="mt-1">
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="*********"
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword?.message && (
                <p className="text-xs text-orange-500">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <div className="mt-1">
                <Input
                  placeholder="Address"
                  {...register("address")}
                  autoComplete="address"
                />
              </div>

              {errors.address?.message && (
                <span className="text-xs text-orange-500">
                  {errors.address?.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <div className="mt-1">
                <Input
                  placeholder="City"
                  {...register("city")}
                  autoComplete="city"
                />
              </div>

              {errors.city?.message && (
                <span className="text-xs text-orange-500">
                  {errors.city?.message}
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="province">Province</Label>
              <div className="mt-1">
                <Input
                  placeholder="Province"
                  {...register("province")}
                  autoComplete="province"
                />
              </div>

              {errors.province?.message && (
                <span className="text-xs text-orange-500">
                  {errors.province?.message}
                </span>
              )}
            </div>

            <div>
              <Button>{!id ? "Register" : "Confirm"}</Button>
            </div>

            <p className="mt-6 text-sm text-center text-neutral-800 dark:text-neutral-200">
              Already have an account?
              <Link
                to="../login"
                className="underline ml-1 text-sm  object-center text-blue-ribbon-500"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
