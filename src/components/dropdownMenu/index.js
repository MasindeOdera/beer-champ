import React, { useEffect, useState } from "react";
// import { store } from "./../../context/appStore.js";
import { Dropdown } from "semantic-ui-react";

const beerChamp = require("../../service/beers");

//The Semantic UI used in this project equires this structure.
class DropdownItem {
  constructor(value) {
    this.key = value;
    this.value = value;
    this.text = value;
  }
}

const DropdownMenu = () => {
  const [beersStyles, setBeersStyles] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [beersTitles, setBeerTitles] = useState([]);
  const [beerColors, setBeerColors] = useState([]);

  useEffect(() => {
    beerChamp.fetchData((err, data) => {
      const stylesArray = [];
      data.map((item) => {
        //Need to filter out duplicate style names
        if (!stylesArray.includes(item.style)) {
          return stylesArray.push(item.style);
        }
        return stylesArray;
      });
      const outputArray = [];
      //In order to use Semantic UI dropdown.
      stylesArray.map((style) => {
        return outputArray.push(new DropdownItem(style));
      });
      //Assign all beer data to allBeers
      setAllBeers(data);
      //Assign all available styles to beerStyles
      setBeersStyles(outputArray);
    });
  }, []);

  const onClickHandlerStyle = (event, data) => {
    setSelectedStyle(data.value);
    setBeerTitles([]);
    setBeerColors([]);
    const titlesArray = [];
    allBeers
      .filter((beer) => beer.style === data.value)
      .map((item) => {
        return titlesArray.push(new DropdownItem(item.title));
      });

    setBeerTitles(titlesArray);
  };

  const onClickHandlerTitle = (event, data) => {
    const colorsArray = [];
    allBeers
      .filter((beer) => beer.title === data.value)
      .map((item) => {
        item.colors.map((color) => {
          return colorsArray.push(new DropdownItem(color));
        });
        return colorsArray;
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
        onChange={onClickHandlerStyle}
        value={selectedStyle}
      />
      <Dropdown
        placeholder="Select Beer Name"
        fluid
        selection
        onChange={onClickHandlerTitle}
        options={beersTitles}
      />
      <Dropdown
        placeholder="Select Beer Color"
        fluid
        selection
        options={beerColors}
      />
    </React.Fragment>
  );
};

export default DropdownMenu;
