import React, { useEffect, useState, useContext } from "react";
import { store } from "./../../context/appStore.js";
import { Dropdown } from "semantic-ui-react";
import beerChamp from "../../service/beers";
// const beerChamp = require("../../service/beers");

class DropdownItem {
  constructor(value) {
    this.key = value;
    this.value = value;
    this.text = value;
  }
}

const DropdownMenu = () => {
  const globalState = useContext(store);
  const { beerList } = globalState.state;
  // const { dispatch } = globalState;

  console.log(beerList);
  const [beersStyles, setBeersStyles] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [beersTitles, setBeerTitles] = useState([]);
  const [beersColors, setBeerColors] = useState([]);

  useEffect(() => {
    beerChamp.fetchData((err, data) => {
      const stylesArray = [];
      const tempStylesArray = [];
      let loseDuplicates = [];
      data.map((item, index) => {
        tempStylesArray.push(item.style);
        console.log("First time:", tempStylesArray);
        loseDuplicates = Array.from(new Set(tempStylesArray));
        console.log("New list without duplicates", loseDuplicates);
        return stylesArray.push(new DropdownItem(loseDuplicates));
      });
      let removeDuplicate = Array.from(new Set(tempStylesArray));
      console.log(tempStylesArray);
      console.log(stylesArray);
      console.log(removeDuplicate);
      setAllBeers(data);
      setBeersStyles(stylesArray);
    });
  }, []);

  const onStyleClickHandler = (event, data) => {
    setSelectedStyle(data.value);
    const titlesArray = [];
    allBeers
      .filter((beer) => beer.style === data.value)
      .map((item) => {
        return titlesArray.push(new DropdownItem(item.title));
      });
    setBeerTitles(titlesArray);
  };

  const onTitleClickHandler = (event, data) => {
    setBeerTitles(data.value);
    const colorsArray = [];
    allBeers
      .filter((beer) => beer.title === data.value)
      .map((item) => {
        return colorsArray.push(new DropdownItem(item.colors));
      });
    setBeerColors(colorsArray);
  };

  return (
    <React.Fragment>
      <Dropdown
        placeholder="Select Beer Style"
        fluid
        selection
        options={beersStyles}
        onChange={onStyleClickHandler}
        value={selectedStyle}
      />

      <Dropdown
        placeholder="Select Beer Name"
        fluid
        selection
        options={beersTitles}
        onChange={onTitleClickHandler}
      />

      <Dropdown
        placeholder="Select Beer Color"
        fluid
        selection
        options={beersColors}
      />
    </React.Fragment>
  );
};

export default DropdownMenu;
