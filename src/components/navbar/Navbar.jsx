import React from "react";
import { useStoreState } from "easy-peasy";
import Link from "next/link";

const Navbar = () => {
  const items = useStoreState((state) => state.carts);

  return (
    <div>
      <header className="text-gray-600 body-font fixed w-full z-50 bg-yellow-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-white hover:text-gray-300 mb-4 md:mb-0"
          >
            <img width={50} src="/logo.svg" alt="" />
            <span className="ml-3 text-xl">FruitFarm</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 text-white hover:text-gray-300">
              Home
            </Link>
            <Link
              href="/products"
              className="mr-5 text-white hover:text-gray-300"
            >
              Products
            </Link>
            <Link href="/cart" className="mr-5 text-white hover:text-gray-300">
              Cart({items.items.length})
            </Link>
          </nav>
          <button
            className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4
            focus:outline-none hover:bg-indigo-600 rounded text-sm"
          >
            {" "}
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
