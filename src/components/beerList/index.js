import React, { useContext } from "react";
import { store } from "./../../context/appStore.js";
import "./styles.scss";

function BeerList() {
  const globalState = useContext(store);
  // const { dispatch } = globalState;
  const { state } = globalState;

  console.log(state);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default BeerList;
