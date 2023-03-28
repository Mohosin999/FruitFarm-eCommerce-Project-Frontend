import React from "react";
import LoginForm from "../components/login-register-form/Form";

const Login = () => {
  return (
    // <div>
    //   <LoginForm
    //     title={"Login"}
    //     email={"Enter Your Email"}
    //     password={"Enter Your Password"}
    //     button={"Login"}
    //   />
    // </div>
    <div className="container mx-auto px-5 pt-24 flex flex-col min-h-screen">
      <section className="text-gray-100 body-font relative">
        <div className="container px-5 pb-10 md:pb-16 pt-24 md:pt-14 mx-auto flex justify-center items-center">
          <div className="lg:w-3/6 md:w-1/2 rounded-lg flex flex-col w-full">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                Login Form
              </h1>
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-400">
                Enter Your Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-gray-100 bg-indigo-500 border-0 py-1 md:py-1 lg:py-2 px-8 md:px-10 lg:px-10 mt-3 text-sm md:text-lg focus:outline-none hover:bg-indigo-600 rounded">
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
