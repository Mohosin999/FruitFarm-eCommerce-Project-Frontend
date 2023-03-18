import React from "react";

const Products = (props) => {
  return (
    <div className="container mx-auto px-5">
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 class="text-white title-font text-lg font-medium">
                  {props.name}
                </h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer a29b5ae704168a93f1b354fe98e01cc6822cf9cc308c1483b1036d9eafd4db7b792b72a40f55142040ec1b0c6da0febbab965ff7c72103922cbc1279e0214630a80eb73e7a90d69e7a33d95c78f3bdade1cfc31ac75b7c948d58bd11ab73b4c5e46997f822c8a7928832a24d251b8409b3dfa7679e07af323c29b64a7f578d43",
  };
  let a = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: headers,
  });
  let products = await a.json();
  console.log(products);

  return {
    props: { products },
  };
}

export default Products;
