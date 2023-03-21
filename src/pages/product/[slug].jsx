import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container mx-auto px-5 pt-44 md:pt-24">
      <section className="text-gray-600 bg-green-400 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
          {product.attributes.image.data && (
            <div className="lg:w-4/5 md:w-4/5 mx-auto lg:flex lg:flexWrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={`http://127.0.0.1:1337${product.attributes.image.data.attributes.url}`}
              />

              <div className="lg:w-1/2 md:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm  title-font text-gray-500 trackingWidest">
                  FruitFarm
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.attributes.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>

                <div className="my-6">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    Description
                  </h1>
                  <p className="leading-relaxed">
                    {product.attributes.description}
                  </p>
                </div>

                <div className="flex flex-col">
                  <div>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      Price
                    </h1>
                  </div>
                  <div className="flex flex-row">
                    <span className="md:mt-2 title-font font-medium text-xl text-gray-600">
                      {product.attributes.price}$
                    </span>
                    <div className="md:ml-10 ml-2 flex flex-row">
                      <button className="mr-2 text-white bg-red-500 border-0 py-1 md:py-1 lg:py-2 px-2 md:px-2 lg:px-4 focus:outline-none hover:bg-red-600 rounded">
                        Add to Cart
                      </button>
                      <button className="text-white bg-red-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-red-600 rounded">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:1337/api/products?filters[slug]=${context.query.slug}&populate=*`,
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    const product = response.data;
    return {
      props: { product: product.data[0] },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { product: [] },
    };
  }
}

export default Product;
