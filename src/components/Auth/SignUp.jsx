import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"; // Import Axios for HTTP requests
import SignUpImage from "../../assets/undraw_signup.svg";
import { signUpSchema } from "../../Validations/userValidation";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Send form data to the backend
      const response = await axios.post(
        "http://localhost:5218/api/account/register",
        {
          username: data.username,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Form submitted successfully:", response.data);

      navigate("/signin");

      // Optionally, clear the form or show a success message
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle errors such as network error, backend error, etc.
    }
  };

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
                {...register("email")}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.email?.message}
              </p>
            </div>

            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
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
