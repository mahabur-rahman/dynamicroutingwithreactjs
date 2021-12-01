import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/AllProducts";
import Details from "./components/Details";

/* third way to implement one func to fetch any real api 😄 */

export const fetchData = async (url, setter) => {
  try {
    const dataFetch = await fetch(url, setter);
    const data = await dataFetch.json();
    if (data) {
      setter(data);
    } else {
      setter([]);
    }
  } catch (error) {
    console.log(error);
  }
};
/* third way to implement one func to fetch any real api 😄 */

// export const fetchData = async (url, setter) => {
//   try {
//     const dataFetch = await fetch(url, setter);
//     const data = await dataFetch.json();
//     if (data) {
//       setter(data);
//     } else {
//       setter([]);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

function App() {
  // ================== 2nd way to fetch data ================
  // const [state, setState] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();
  //   setState(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(state);
  // ================== 2nd way to fetch data ================

  // const [state, setState] = useState([]);
  // const fetchData = async () => {
  //   const dataFetch = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await dataFetch.json();
  //    console.log(data);
  //   setState(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />

      {/* ====================== */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Details} />
      </Switch> */}
      {/* ====================== */}

      {/*  2nd way to fetch data and supply to child component  */}
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products">
          <Products state={[...state]} />
        </Route>
        <Route exact path="/products/:id">
          <Details state={[...state]} />
        </Route>
      </Switch> */}
      {/*  2nd way to fetch data and supply to child component  */}

      {/* third way to implement one func to fetch any real api 😄 */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Details} />
      </Switch>
      {/* third way to implement one func to fetch any real api 😄 */}
    </>
  );
}

export default App;
