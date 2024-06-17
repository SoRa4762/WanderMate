// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignUpImage from "../../assets/undraw_signup.svg";
import { signUpSchema } from "../../Validations/userValidation";

const SignUp = () => {
  // const [signUpValues, setSignUpValues] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let formData = {
  //     username: e.target[0].value,
  //     email: e.target[1].value,
  //     password: e.target[2].value,
  //   };

  //   await console.log(formData);
  //   const isValid = await signUpSchema.isValid(formData);
  //   console.log(isValid);
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSignUpValues((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  //   console.log("Sign Up Values: ", signUpValues);
  // };

  //for submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const userName = e.target[0].value;
  //   const email = e.target[1].value;
  //   const password = e.target[2].value;
  //   const confirmPassword = e.target[3].value;
  //   const iAgree = e.target[4].value;

  //   await console.log(userName, email, password, confirmPassword, iAgree);
  // };

  return (
    <>
      <div className="h-[100vh] w-full sm:p-12 md:pl-20 md:pr-20 lg:pl-32 lg:pr-32">
        <div
          className="h-full w-full grid grid-cols-1 md:grid-cols-2 rounded-md"
          style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
        >
          {/* sign up form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12"
          >
            <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
              Sign Up
            </h1>

            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                // onChange={handleChange}
                {...register("username")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.username?.message}
              </p>
            </div>

            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                // onChange={handleChange}
                {...register("email")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.email?.message}
              </p>
            </div>

            {/*if you add eye button, make sure to turn the type to text and back */}
            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                // onChange={handleChange}
                {...register("password")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.password?.message}
              </p>
            </div>

            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                // onChange={handleChange}
                {...register("confirmPassword")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <button
              type="submit"
              className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
            >
              Sign Up
            </button>

            <div className="flex flex-col items-center">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="condition"
                  id="condition"
                  // onChange={handleChange}
                  {...register("iAgree")}
                />
                <p>
                  I agree to all{" "}
                  <span className="text-blue-600">
                    <a href="/termsconditions">Terms and Conditions</a>
                  </span>
                </p>
              </div>
              <p className="text-xs lg:text-sm text-red-600 font-semibold">
                {errors.iAgree?.message}
              </p>
            </div>
          </form>

          {/* sign up image */}
          <div className="flex flex-col justify-center items-center pl-8 pr-8 gap-2 md:gap-4 lg:gap-6">
            <img className="w-11/12" src={SignUpImage} alt="sign up Image" />
            <p className="font-normal">
              Already a Member?{" "}
              <span className="text-blue-600">
                <a href="/signIn">Sign In</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
