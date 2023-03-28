import React, { useState } from "react";
import axios from "axios";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";
import setToken from "@/lib/auth";

const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const register = useStoreActions((actions) => actions.auth.register);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: userData.username,
          email: userData.email,
          password: userData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setToken(responseData);
      register(responseData);
      router.push("/profile");
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container mx-auto px-5 pt-24 flex flex-col min-h-screen">
      <section className="text-gray-100 body-font relative">
        <div className="container px-5 pb-10 md:pb-16 pt-24 md:pt-14 mx-auto flex justify-center items-center">
          <div className="lg:w-3/6 md:w-1/2 rounded-lg flex flex-col w-full">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                Register Form
              </h1>
            </div>
            <div className="relative mb-4">
              <label for="username" className="leading-7 text-sm text-gray-400">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                onChange={(e) => handleChange(e)}
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => handleChange(e)}
                required
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="password" className="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => handleChange(e)}
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="text-gray-100 bg-indigo-500 border-0 py-1 md:py-1 lg:py-2 px-8 md:px-10 lg:px-10 mt-3 text-sm md:text-lg focus:outline-none hover:bg-indigo-600 rounded"
            >
              Register
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
