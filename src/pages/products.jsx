import React from "react";
import axios from "axios";
import Link from "next/link";
import ImageComponent from "@/components/navbar/image/Image";

const Products = ({ products }) => {
  return (
    <div className="container mx-auto px-5">
      <section className="text-gray-400 bg-green-900 body-font mb-5">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.data.map((item) => {
              return (
                <div key={item.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
                  <Link
                    href={`/product/${item.attributes.slug}`}
                    className="block relative h-48 rounded overflow-hidden"
                  >
                    <ImageComponent
                      item={item.attributes.image.data.attributes.url}
                      alt={"ecommerce"}
                    />
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-white uppercase text-xs tracking-widest title-font mb-1">
                      {item.attributes.category}
                    </h3>
                    <Link href={`/product/${item.attributes.slug}`}>
                      <h2 className="text-white title-font text-lg font-medium">
                        {item.attributes.title}
                      </h2>
                    </Link>
                    <p className="text-white mt-1">{item.attributes.price}$</p>
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
