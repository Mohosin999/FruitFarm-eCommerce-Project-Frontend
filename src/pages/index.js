import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import React from "react";
import axios from "axios";
import Link from "next/link";

const Home = ({ allProducts, newestProducts }) => {
  return (
    <div className="container mx-auto px-5 pt-28 md:pt-10 flex flex-col min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-12 mx-auto">
          <h1 className="text-xl font-medium text-gray-300 mb-8">
            Newest Products
          </h1>
          <div className="flex flex-wrap -m-4">
            {newestProducts.map((item) => {
              return (
                <div key={item.id} className="xl:w-1/4 md:w-1/2 w-full p-2">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <Link href={`/product/${item.attributes.slug}`}>
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={`http://127.0.0.1:1337${item.attributes.image.data.attributes.url}`}
                        alt="content"
                      />
                    </Link>

                    <h3 className="tracking-widest uppercase text-gray-400 text-xs font-medium title-font">
                      {item.attributes.category}
                    </h3>

                    <Link href={`/product/${item.attributes.slug}`}>
                      <h2 className="text-lg text-gray-300 font-medium title-font mb-0">
                        {item.attributes.title}
                      </h2>
                    </Link>

                    <h2 className="text-gray-400 leading-relaxed text-base">
                      {item.attributes.price}$
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container px-5 pt-0 pb-14 mx-auto">
          <h1 className="text-xl font-medium text-gray-300 mb-8">
            All Products
          </h1>
          <div className="flex flex-wrap -m-4">
            {allProducts.map((item) => {
              return (
                <div key={item.id} className="xl:w-1/4 md:w-1/2 w-full p-2">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <Link href={`/product/${item.attributes.slug}`}>
                      <img
                        className="h-40 rounded w-full object-cover object-center mb-6"
                        src={`http://127.0.0.1:1337${item.attributes.image.data.attributes.url}`}
                        alt="content"
                      />
                    </Link>

                    <h3 className="tracking-widest uppercase text-gray-400 text-xs font-medium title-font">
                      {item.attributes.category}
                    </h3>

                    <Link href={`/product/${item.attributes.slug}`}>
                      <h2 className="text-lg text-gray-300 font-medium title-font mb-0">
                        {item.attributes.title}
                      </h2>
                    </Link>

                    <h2 className="text-gray-400 leading-relaxed text-base">
                      {item.attributes.price}$
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   try {
//     const response = await axios.get(
//       "http://127.0.0.1:1337/api/products?populate=*",
//       {
//         headers: {
//           Authorization:
//             "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
//         },
//       }
//     );
//     const products = response.data;
//     return {
//       props: { products: products.data.slice(0, 4) },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: { products: [] },
//     };
//   }
// }

// export async function getServerSideProps(context) {
//   try {
//     const response = await axios.get(
//       "http://127.0.0.1:1337/api/products?populate=*&_sort=created_at:DESC&_limit=4",
//       {
//         headers: {
//           Authorization:
//             "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
//         },
//       }
//     );
//     const newestProducts = response.data;
//     return {
//       props: { newestProducts: newestProducts.data },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: { newestProducts: [] },
//     };
//   }
// }

export async function getServerSideProps(context) {
  try {
    const allResponse = await axios.get(
      "http://127.0.0.1:1337/api/products?populate=*",
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    const allProducts = allResponse.data;

    const recentResponse = await axios.get(
      "http://127.0.0.1:1337/api/products?populate=*&_sort=created_at:DESC",
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    const newestProducts = recentResponse.data;

    return {
      props: {
        allProducts: allProducts.data.slice(0, 4),
        newestProducts: newestProducts.data.slice(-4).reverse(),
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { allProducts: [], recentProducts: [] },
    };
  }
}

export default Home;
