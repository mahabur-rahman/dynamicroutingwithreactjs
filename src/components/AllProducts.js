import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../App";
// import { fetchData } from "../App";
// ===================
import { ProductData } from "../Data/ProductData";

// ===================
const AllProducts = ({ state }) => {
  // third way to implement one func to fetch any real api 😄

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("https://jsonplaceholder.typicode.com/posts", setData);
  }, []);
  // console.log(data);
  // console.log(data.every((item) => item.id));

  // end of third way to implement one func to fetch any real api 😄

  return (
    <>
      <h1>AllProducts page</h1>
      {/* <div>
        {state.map((data) => {
          return (
            <div key={data.id}>
              <h6>{data.id}</h6>
              <Link to={`/products/${data.id}`}>
                <h4>{data.title}</h4>
              </Link>
            </div>
          );
        })}
      </div> */}
      {/* ======================= */}
      {data.map((product) => {
        return (
          <div key={product.id}>
            <h4>{product.id}</h4>

            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </div>
        );
      })}
      {/* ======================= */}
    </>
  );
};

export default AllProducts;
