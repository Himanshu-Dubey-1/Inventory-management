import { Link, useNavigate } from "react-router-dom";
import { IRegisterFormData } from "../models/IRegisterFormData";
import { useState } from "react";
import axiosInstance from "../api/api";

const SignUp = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  } as IRegisterFormData);
  const navigate = useNavigate();

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onHandleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const req = {
      username: registerForm.username,
      email: registerForm.email,
      password: registerForm.password,
    };
    try {
      console.log(req);
      const response = await axiosInstance.post("/Signup", req);
      console.log(response.data);
      // localStorage.setItem("user",response.data)
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#c5d4e6]">
        <div className="flex flex-col md:flex-row shadow-xl rounded-2xl overflow-hidden w-full max-w-7xl">
          {/* Left Panel - Signup Form */}
          <div className="w-full md:w-1/2 bg-white px-10 py-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Create Your Account
            </h2>
            <form className="space-y-6" onSubmit={onHandleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  value={registerForm.username}
                  onChange={onChangeHandler}
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  value={registerForm.email}
                  onChange={onChangeHandler}
                  id="email"
                  name="email"
                  type="email"
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
                  value={registerForm.password}
                  onChange={onChangeHandler}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Create a password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Sign Up
              </button>

              <p className="text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>

          {/* Right Panel - Illustration */}
          <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center">
            <img
              src="/illustration-signup.png" 
              alt="Signup Illustration"
              className="w-full h-auto object-contain max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
