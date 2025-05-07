import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ILoginFormData } from "../models/ILoginFormData";
import { toast } from "react-toastify";
import axiosInstance from "../api/api";

const Login = () => {
  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const isAuthenticated = document.cookie.includes("uid");

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
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/main");
    }
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#c5d4e6]">
        <div className="flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden w-full max-w-7xl">
          {/* Left Panel - Form */}
          <div className="w-full md:w-1/2 bg-white px-10 py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Inventory Management
            </h2>
            <form className="space-y-6" onSubmit={onHandleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  value={formData.password}
                  onChange={onChangeHandler}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Log in
              </button>

              <Link to={"/signup"}>
                <button
                  type="button"
                  className="w-full border border-blue-700 text-blue-700 p-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Sign up
                </button>
              </Link>
            </form>
          </div>

          {/* Right Panel - Illustration */}
          <div className="w-full md:w-1/2 bg-white p-8 flex items-center justify-center">
            <img
              src="/illustration1.png"
              alt="Inventory Illustration"
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
