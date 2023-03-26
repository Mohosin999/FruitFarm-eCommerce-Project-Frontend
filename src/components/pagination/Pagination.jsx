import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

let PAGE_SIZE = 9; // number of items per page

const Pagination = ({ initialData }) => {
  let [pageIndex, setPageIndex] = useState(1);

  const { data, error } = useSWR(
    `http://127.0.0.1:1337/api/products?pagination[page]=${pageIndex}&pagination[pageSize]=${PAGE_SIZE}`,
    { fallbackData: initialData }
  );

  if (error) return <div>Error loading items.</div>;

  const items = data?.data || [];

  return (
    <>
      <div className="bg-white space-x-2 spacce-y-2">
        {/* <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
        <button
          disabled={pageIndex === 1}
          onClick={() => setPageIndex((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          disabled={items.length < PAGE_SIZE}
          onClick={() => setPageIndex((prev) => prev + 1)}
        >
          Next
        </button>
        <span>{`${pageIndex} of ${
          data && data.meta.pagination.pageCount
        }`}</span>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const response = await axios.get(
      `http://127.0.0.1:1337/api/products?pagination[page]=1&pagination[pageSize]=9`,
      {
        headers: {
          Authorization:
            "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
        },
      }
    );
    let paginationData = response.data;
    return {
      props: {
        initialData: paginationData,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { initialData: [] },
    };
  }
}

export default Pagination;

// import { useState } from "react";
// import axios from "axios";
// import useSWR from "swr";

// let PAGE_SIZE = 9; // number of items per page

// const Pagination = () => {
//   let [pageIndex, setPageIndex] = useState(1);

//   const { data, error } = useSWR(
//     `http://127.0.0.1:1337/api/products?pagination[page]=${pageIndex}&pagination[pageSize]=${PAGE_SIZE}`
//   );

//   if (error) return <div>Error loading items.</div>;

//   return (
//     <>
//       {/* <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul> */}
//       <button
//         // disabled={pageIndex === 1}
//         onClick={() => setPageIndex((prev) => prev - 1)}
//       >
//         Previous
//       </button>
//       <button
//         // disabled={pg.length < PAGE_SIZE}
//         onClick={() => setPageIndex((prev) => prev + 1)}
//       >
//         Next
//       </button>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   try {
//     const response = await axios.get(
//       `http://127.0.0.1:1337/api/products?pagination[page]=1&pagination[pageSize]=9`,
//       {
//         headers: {
//           Authorization:
//             "bearer fb02ce15a12ca5c7d6465a3605ef70a044ac8d0efed62af56580796f7b0aaf2f879c144da8f88dca0891ca5cac02fb4df4fa800382fcaff8eb26a4296091332c87be9fb8b91e6088e2f26a7d7555e51f6a5357c752dba19be2cd970f13b40fb06b8836e9e57d99527fe04f49844f5d91bba29027f286375c4d389f71e1fa351b",
//         },
//       }
//     );
//     let paginationData = response.data;
//     console.log(paginationData);
//     return {
//       props: {
//         pg: paginationData,
//       },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { paginationData: [] },
//     };
//   }
// }

// export default Pagination;
