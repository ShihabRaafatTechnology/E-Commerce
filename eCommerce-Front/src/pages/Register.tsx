import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, TFormHandler } from "@validations/registerSchema";
import { Input, PasswordInput } from "@components/form";
import React, { useEffect } from "react";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister, resetUI } from "@store/auth/authSlice";
// import { email } from "node_modules/zod/dist/types/v4/core/regexes";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, accessToken } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<TFormHandler>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const {
    checkEmailAvailability,
    enteredEmail,
    emailAvailabilityStatus,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();
  const submitForm: SubmitHandler<TFormHandler> = (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password })).unwrap().then(() => navigate("/sign-in?message=account_created"));
  };

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email");
    console.log(invalid);

    if (isDirty && !invalid && enteredEmail !== value) {
      console.log(emailAvailabilityStatus);

      // Checking
      checkEmailAvailability(value);
    }
    if (isDirty && invalid && enteredEmail) {
      console.log(invalid, enteredEmail, isDirty, "reset");

      resetCheckEmailAvailability();
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetUI())
    }
  }, [dispatch])

  if (accessToken) {
    navigate("/")
  }
  return (
    <div className="w-full min-h-screen flex items-center justify-center absolute top-0 z-50">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 h-full bg-white flex items-center justify-center">
          <div className="w-full px-12 my-10">
            <h2 className="text-center text-xl font-bold tracking-wide text-gray-800">
              Register
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                Sign in here
              </Link>
            </p>

            <form className="my-8 text-lg" onSubmit={handleSubmit(submitForm)}>
              <Input
                label="First Name"
                name="firstName"
                type="text"
                register={register}
                errorMessage={errors.firstName?.message as string}
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                register={register}
                errorMessage={errors.lastName?.message as string}
              />
              <Input
                label="Email"
                name="email"
                type="text"
                register={register}
                onBlur={emailOnBlurHandler}
                errorMessage={errors.email?.message ? errors.email?.message : emailAvailabilityStatus === "notAvailable" ? "this email is already use." : emailAvailabilityStatus === "failed" ? "Error from server." : ""}
                checkMessage={emailAvailabilityStatus === "checking" ? "Checking email from database, please wait..." : ""}
                successMessage={emailAvailabilityStatus === "available" ? "this email is availabe" : ""}
                disabled={emailAvailabilityStatus === "checking" ? true : false}
              />
              <PasswordInput
                label="Password"
                name="password"
                register={register}
                error={errors.password?.message as string}
              />
              <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                register={register}
                error={errors.confirmPassword?.message as string}
              />

              <div className="my-4 flex items-center justify-end space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-5 py-2 text-base text-gray-100 hover:shadow-xl transition duration-150" disabled={emailAvailabilityStatus === "checking" ? true : false || loading === "pending"}>
                  {loading === "pending" ?
                    "Loading..."
                    : "Register"}
                </button>
              </div>
            </form>

            {error && (
              <p className="text-center text-red-500">{error}</p>
            )}

            <div className="flex items-center justify-between">
              <div className="w-full h-[1px] bg-gray-300"></div>
              <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="text-base">
              <a
                href="#"
                className="flex items-center justify-center space-x-2 text-gray-600 my-1 py-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                <span>Sign up with Google</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center space-x-2 text-gray-600 my-1 py-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                <span>Sign up with Facebook</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:flex lg:w-1/2 h-full bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
