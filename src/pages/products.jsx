import React from "react";
import axios from "axios";

const Products = ({ products }) => {
  return (
    <div className="container mx-auto px-5">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {products.data[0].attributes.category}
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  {products.data[1].attributes.title}
                </h2>
                <p className="mt-1">{products.data[0].attributes.price}$</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
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
