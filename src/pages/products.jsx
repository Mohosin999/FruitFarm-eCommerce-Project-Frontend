import React from "react";
import axios from "axios";
import Link from "next/link";
import Pagination from "@/components/pagination/Pagination";

const Products = ({ products, category }) => {
  return (
    // <div className="container mx-auto px-5 pt-28 md:pt-10 flex flex-col min-h-screen">
    //   <section className="text-gray-600 body-font">
    //     <div className="container px-5 pt-24 pb-12 mx-auto">
    //       <div className="flex flex-wrap -m-4">
    //         {products.data.map((item) => {
    //           return (
    //             <div key={item.id} className="xl:w-1/4 md:w-1/2 w-full p-2">
    //               <div className="bg-gray-800 p-6 rounded-lg">
    //                 <Link href={`/product/${item.attributes.slug}`}>
    //                   <img
    //                     className="h-40 rounded w-full object-cover object-center mb-6"
    //                     src={`http://127.0.0.1:1337${item.attributes.image.data.attributes.url}`}
    //                     alt="content"
    //                   />
    //                 </Link>

    //                 <h3 className="tracking-widest uppercase text-gray-400 text-xs font-medium title-font">
    //                   {item.attributes.category}
    //                 </h3>

    //                 <Link href={`/product/${item.attributes.slug}`}>
    //                   <h2 className="text-lg text-gray-300 font-medium title-font mb-0">
    //                     {item.attributes.title}
    //                   </h2>
    //                 </Link>

    //                 <h2 className="text-gray-400 leading-relaxed text-base">
    //                   {item.attributes.price}$
    //                 </h2>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <>
      // Category list
      <div className="container mx-auto px-5 pt-28 md:pt-10 flex flex-col min-h-screen">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="container px-5 pt-24 pb-12 mx-auto">
              <ul className="text-gray-600 body-font">
                <h1 className="tracking-widest uppercase text-gray-300 text-sm font-medium title-font mb-4">
                  Category
                </h1>
                <li className="mb-2">
                  <Link
                    href={`/categories/${category[1].attributes.slug}`}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Mango
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href={`/categories/${category[0].attributes.slug}`}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Apple
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href={`/categories/${category[2].attributes.slug}`}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    Orange
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Products list */}
          <div className="w-full md:w-3/4">
            <section className="text-gray-600 body-font">
              <div className="container px-5 pt-24 pb-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {products.data.map((item) => {
                    return (
                      <div key={item.id} className="w-full md:w-1/3 p-2">
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
        </div>
      </div>
      {/* pagination component */}
      <Pagination />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    // data fetching for all products
    const response = await axios.get(
      "http://127.0.0.1:1337/api/products?populate=*",
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    const products = response.data;

    // data fetching for all categories
    const categoriesProducts = await axios.get(
      "http://127.0.0.1:1337/api/categories?populate=*",
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    const product = categoriesProducts.data;

    return {
      props: { products, category: product.data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [], category: [] },
    };
  }
}

export default Products;
