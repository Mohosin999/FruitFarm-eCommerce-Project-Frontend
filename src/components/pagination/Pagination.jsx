import React from "react";
import axios from "axios";

const Pagination = ({ products, countData, totalPages, currentPage }) => {
  console.log(countData);
  return (
    <div>
      {currentPage > 1 && (
        <a href={`/products?page=${currentPage - 1}`}>Previous</a>
      )}
      {Array.from({ length: totalPages }).map((_, index) => (
        <a key={index} href={`/products?page=${index + 1}`}>
          {index + 1}
        </a>
      ))}
      {currentPage < totalPages && (
        <a href={`/products?page=${currentPage + 1}`}>Next</a>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;
  const pageSize = 5;
  const skip = (page - 1) * pageSize;

  try {
    const response = await axios.get(
      ` http://127.0.0.1:1337/api/products?skip=${skip}&limit=${pageSize}`,
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    const paginationData = response.data;
    return {
      props: {
        paginationData,
        //   countData: countData.data.length,
        //   totalPages,
        //   currentPage: parseInt(page),
      },
    };
  } catch (e) {
    console.log(e);
  }

  //   const countData = await products.data;
  //   const totalProducts = countData.count;
  //   const totalPages = Math.ceil(totalProducts / pageSize);
}

export default Pagination;
