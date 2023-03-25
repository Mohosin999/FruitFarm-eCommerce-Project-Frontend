import React, { useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";

const CartPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Here I use router to go back and I use it inside "Go Back" button
  const router = useRouter();

  // Those things comes from store
  const { products, grandTotal } = useStoreState((state) => ({
    products: state.carts.items,
    grandTotal: state.carts.grandTotal,
  }));
  const { removeFromCart, clearAllCart, incrementCartItem, decrementCartItem } =
    useStoreActions((actions) => actions.carts);

  const handleDelete = (id) => {
    removeFromCart(id);
    setSelectedProducts([]);
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedProducts(id);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font  flex flex-col min-h-screen">
        <div className="container px-5 pb-10 md:pb-16 pt-44 md:pt-32 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <p className="text-md md:text-xl font-medium title-font mb-2 text-gray-100">
              All Your Choosing Product Here
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Product Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Handle Quantity
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Total Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-gray-100">
                        {product.attributes.title}
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-gray-100">
                        {product.attributes.quantity}
                      </td>
                      {/* Handle Increment (+) and Decrement (-) Buttons */}
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-gray-100">
                        <div>
                          <button
                            onClick={() => decrementCartItem(product)}
                            className="mr-2 mb-1 bg-green-800 hover:bg-orange-700 text-gray-100 px-3"
                          >
                            -
                          </button>
                          <button
                            onClick={() => incrementCartItem(product)}
                            className="bg-green-800 hover:bg-orange-700 text-gray-100 px-3"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-100">
                        {product.attributes.totalPrice}$
                      </td>
                      <td className="border-t-2 border-gray-200 w-10 text-center">
                        <input
                          name="plan"
                          type="checkbox"
                          onChange={(e) => {
                            handleCheckboxChange(e, product.id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Go Back, Clear & Delete Buttons */}
          <div className="flex mt-4 lg:w-2/3 w-full mx-auto">
            <button
              onClick={() => router.back()}
              className="flex text-gray-100 bg-indigo-500 border-0 py-1 md:py-1 lg:py-2 px-2 md:px-2 lg:px-4 text-sm md:text-lg focus:outline-none hover:bg-indigo-600 rounded"
            >
              Go Back
            </button>
            <button
              onClick={() => clearAllCart()}
              className="flex ml-auto text-gray-100 bg-indigo-500 border-0 py-1 md:py-1 lg:py-2 px-2 md:px-2 lg:px-4 text-sm md:text-lg focus:outline-none hover:bg-indigo-600 rounded"
            >
              Clear
            </button>

            <button
              onClick={() => handleDelete(selectedProducts)}
              className="flex ml-3 text-gray-100 bg-indigo-500 border-0 py-1 md:py-1 lg:py-2 px-2 md:px-2 lg:px-4 text-sm md:text-lg focus:outline-none hover:bg-indigo-600 rounded"
            >
              Delete
            </button>
          </div>

          {/* Grand Price & Payment Button */}
          <div className="flex flex-col items-center justify-center ml-auto mt-10 w-full">
            <div className="mb-2">
              <h1 className="text-md md:text-xl font-medium title-font text-gray-100">
                Grand Total: {grandTotal}$
              </h1>
            </div>
            <div>
              <button className="text-gray-100 bg-indigo-500 border-0 py-1 md:py-1 lg:py-2 px-8 md:px-10 lg:px-10 text-sm md:text-lg focus:outline-none hover:bg-indigo-600 rounded">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
