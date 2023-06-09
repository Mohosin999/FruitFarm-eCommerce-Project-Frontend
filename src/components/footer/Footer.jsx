import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="bg-teal-900 text-gray-600 body-font">
        <div className="border-t border-gray-200">
          <div className="container px-5 pb-6 md:pb-10 pt-6 md:pt-6 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start pl-10 md:pl-10 lg:pl-28 xl:pl-36">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  for="footer-field"
                  className="leading-7 text-md text-white"
                >
                  Search Here
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full h-7 md:h-11 bg-yellow-300 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:bg-yellow-200 focus:border-gray-100 text-sm md:text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-pink-800 border-0 py-1 md:py-2 lg:py-2 px-2 md:px-4 lg:px-4 text-sm md:text-lg focus:outline-none hover:bg-pink-900 rounded">
                Search
              </button>
            </div>
            <div className="pl-10 md:pl-32 lg:pl-52 xl:pl-80 pt-4">
              <Link
                href="/about"
                className="mr-5 md:mr-8 text-white hover:text-gray-300"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="mr-5 text-white hover:text-gray-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
