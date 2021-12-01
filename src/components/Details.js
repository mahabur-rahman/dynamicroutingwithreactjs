import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// =======================
import { ProductData } from "../Data/ProductData";
import { useParams } from "react-router-dom";
import { fetchData } from "../App";

// =======================
const Details = ({ state }) => {
  // ===================

  // third way to implement one func to fetch any real api 😄

  const [data, setData] = useState([]);

  const params = useParams();
  // console.log(params);
  const findItem = data.find((e) => e.id.toString() === params.id.toString());
  console.log(findItem);

  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/posts`, setData);
  }, []);

  if (findItem === undefined) {
    return data;
  }
  // console.log(data);
  // console.log(data.every((item) => item.id));

  // end of third way to implement one func to fetch any real api 😄

  // ================= 2nd way =================
  //   const data = useParams();
  //  console.log(id);
  //   const findItem = state.find((e) => e.id.toString() === data.id.toString());
  //    console.log(findItem);
  //   const { id, title, body } = findItem;

  // ================= 2nd way =================

  // ============= 1st way for local data =============
  // const data = useParams();
  // console.log(data);

  // const findItem = ProductData.find(
  //   (e) => e.id.toString() === data.id.toString()
  // );
  // console.log(findItem);
  // const { id, name, price, desc } = findItem;
  // ============= 1st way for local data =============

  return (
    <>
      <div>
        {/* <h1>Details Page : {id} </h1>
        <h1>{title}</h1>
        <h1>{body}</h1> */}

        {/* ============= */}
        {/* <h1>{title}</h1>
        <h1>{body}</h1>  */}
        {/* ============= */}

        <h1>Details page : {findItem.id}</h1>
        <h1> {findItem.title}</h1>
        <p> {findItem.body}</p>
      </div>
    </>
  );
};

export default Details;
