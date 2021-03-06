import React, { useEffect, useState, useContext } from "react";
import { store } from "./../../context/appStore.js";
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
  const globalState = useContext(store);
  const { dispatch } = globalState;

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
    const selection = [];
    allBeers
      .filter((beer) => beer.style === data.value)
      .map((item) => {
        selection.push(item);
        return titlesArray.push(new DropdownItem(item.title));
      });

    setBeerTitles(titlesArray);
    dispatch({ type: "UPDATE_SELECTION", payload: selection });
  };

  const onClickHandlerTitle = (event, data) => {
    const colorsArray = [];
    const selectedBeer = data.value;
    dispatch({ type: "CHOSEN_BEER", payload: selectedBeer });
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

  const onClickHandlerColor = (event, data) => {
    const selectedColor = data.value;
    dispatch({ type: "CHOSEN_COLOR", payload: selectedColor });
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
        onChange={onClickHandlerColor}
        options={beerColors}
      />
    </React.Fragment>
  );
};

export default DropdownMenu;
