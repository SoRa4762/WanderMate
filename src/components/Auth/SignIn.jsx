import { useContext } from "react";
import SignInImage from "../../assets/undraw_signin.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../Validations/userValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";

const SignIn = () => {
  // const [signInValues, setSignInValues] = useState({});
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSignInValues((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // console.log(signInValues);
  // };

  //for submit i guess
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const email = e.target[0].value;
  //   const password = e.target[1].value;
  //   const rememberMe = e.target[2].value;

  //   await console.log(email, password, rememberMe);
  // };

  const navigate = useNavigate();

  const { setUserAuth } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  //onSubmit
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5218/api/account/login",
        {
          username: data.username,
          password: data.password,
        }
      );

      console.log(response.data);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("username", response.data.userName);
      setUserAuth({ username: response.data.userName });
      navigate("/home");
    } catch (err) {
      console.log("There was an error signing in: " + err);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full sm:p-12 md:p-16 md:pl-28 md:pr-28 lg:pl-32 lg:pr-32">
        <div
          className="h-full w-full grid grid-cols-1 lg:grid-cols-2 rounded-md gap-24 lg:gap-0"
          style={{ boxShadow: "20px 20px 20px #DEDEDE" }}
        >
          {/* sign in form */}
          <form
            action="submit"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 md:gap-4 lg:gap-6 justify-end lg:justify-center items-center pl-8 pr-8 sm:pl-12 sm:pr-12"
          >
            <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
              Sign In
            </h1>

            <div className="w-full">
              <input
                className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                {...register("username")}
                // onChange={handleChange}
                // value={signInValues["username"]}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.username?.message}
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
                {...register("password")}
                // value={signInValues["password"]}
                // onChange={handleChange}
              />
              <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                {errors.password?.message}
              </p>
            </div>

            <div className="flex gap-2 justify-start w-full">
              <input
                type="checkbox"
                name="condition"
                id="condition"
                {...register("remember")}
                // value={signInValues["condition"]}
                // onChange={handleChange}
              />
              <p>Remember Me </p>
            </div>

            <button
              type="submit"
              className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
            >
              Sign In
            </button>

            <p className="font-normal">
              New Here?{" "}
              <span className="text-blue-600">
                <a href="/signup">Sign Up</a>
              </span>
            </p>
          </form>

          {/* sign up image */}
          <div className="flex flex-col justify-start lg:justify-center items-center pl-8 pr-8 gap-2 md:gap-4 lg:gap-6">
            <img className="w-11/12" src={SignInImage} alt="Sign In Image" />

            <p>Or sign in with .... ....</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
