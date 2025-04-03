import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ILoginFormData } from "../models/ILoginFormData";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import axiosInstance from "../api/api";

const Login = () => {
  
  const { loginWithRedirect} = useAuth0();

  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
  });


  const navigate = useNavigate();

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const req = {
      email: formData.email,
      password: formData.password,
    };
    try {
      // console.log(req);
      const response = await axiosInstance.post("/login", req);
      if (response.data.success) {
        navigate(response.data.redirectUrl);
        toast.warning("user doesn't exist");
      } else if (response.data.passwordNotMatch) {
        toast.warning("Please enter correct password");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(()=>{
  //   deleteCookie("uid")
  //   // console.log("cookie cleared")
  // },[])

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-14">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onHandleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={formData.email}
                  onChange={onChangeHandler}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <Link to="/about" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  value={formData.password}
                  onChange={onChangeHandler}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="relative mt-5 items-center flex flex-col justify-center">
            <p className="bg-white px-4 text-sm/6 font-semibold text-gray-900 mb-5">
              Or continue with
            </p>
            <button
             onClick={() => loginWithRedirect()}
             className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold border shadow-xs hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Google
            </button>
            <p>Google Auth isn't working for now </p>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/SignUp"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Signup now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
