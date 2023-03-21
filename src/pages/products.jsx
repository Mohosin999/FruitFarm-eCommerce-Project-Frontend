import React from "react";
import axios from "axios";
import Link from "next/link";

const Products = ({ products }) => {
  return (
    <div classNameNameName="container mx-auto px-5 pt-44 md:pt-24">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.data.map((item) => {
              return (
                <div key={item.id} class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-100 p-6 rounded-lg">
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={`http://127.0.0.1:1337${item.attributes.image.data.attributes.url}`}
                      alt="content"
                    />
                    <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                      SUBTITLE
                    </h3>
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                      Chichen Itza
                    </h2>
                    <p class="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>

    // <div classNameNameName="container mx-auto px-5 pt-44 md:pt-24">
    //   <section classNameNameName="text-gray-400 bg-green-600 body-font mb-5">
    //     <div classNameNameName="container px-5 py-5 mx-auto">
    //       <div classNameNameName="flex flex-wrap -m-4">
    //         {products.data.map((item) => {
    //           return (
    //             <div key={item.id} classNameNameName="lg:w-1/3 md:w-1/2 p-4 w-full">
    //               <div classNameNameName="relative">
    //                 <Link
    //                   href={`/product/${item.attributes.slug}`}
    //                   classNameNameName="block relative h-48 rounded overflow-hidden"
    //                 >
    //                   <img
    //                     alt="ecommerce"
    //                     classNameNameName="object-cover object-center w-full h-full block"
    //                     src="https://dummyimage.com/421x261"
    //                   />
    //                 </Link>
    //                 <div classNameNameName="mt-4 absolute">
    //                   <h3 classNameNameName="text-white uppercase text-xs tracking-widest title-font mb-1">
    //                     {item.attributes.category}
    //                   </h3>
    //                   <Link href={`/product/${item.attributes.slug}`}>
    //                     <h2 classNameNameName="text-white title-font text-lg font-medium">
    //                       {item.attributes.title}
    //                     </h2>
    //                   </Link>
    //                   <p classNameNameName="text-white mt-1">
    //                     {item.attributes.price}$
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //         {/* {products.data.map((item) => {
    //           return (
    //             <div key={item.id} classNameNameName="lg:w-1/3 md:w-1/2 p-4 w-full">
    //               <Link href={`/product/${item.attributes.slug}`}>
    //                 <div classNameNameName="relative">
    //                   <img
    //                     alt="ecommerce"
    //                     classNameNameName="object-cover object-center w-full h-full block"
    //                     src="https://dummyimage.com/421x261"
    //                   />
    //                   <div classNameNameName="overlay absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
    //                     <h3 classNameNameName="text-xs tracking-widest title-font mb-1">
    //                       {item.attributes.category}
    //                     </h3>
    //                     <h2 classNameNameName="text-lg font-medium">
    //                       {item.attributes.title}
    //                     </h2>
    //                   </div>
    //                 </div>
    //               </Link>
    //               <p classNameNameName="text-white mt-1">{item.attributes.price}$</p>
    //             </div>
    //           );
    //         })} */}
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export async function getServerSideProps(context) {
  try {
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
    return {
      props: { products },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { products: [] },
    };
  }
}

export default Products;
