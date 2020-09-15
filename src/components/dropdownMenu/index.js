import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import beerChamp from "../../service/beers";
// const beerChamp = require("../../service/beers");

class DropdownItem {
  constructor(value, index) {
    this.key = index;
    this.value = value;
    this.text = value;
  }
}

const DropdownMenu = () => {
  const [beersStyles, setBeersStyles] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [beersTitles, setBeerTitles] = useState([]);
  const [beersColors, setBeerColors] = useState([]);

  useEffect(() => {
    beerChamp.fetchData((err, data) => {
      const stylesArray = [];
      data.map((item, index) => {
        return stylesArray.push(new DropdownItem(item.style, index));
      });
      let removeDuplicate = Array.from(new Set(stylesArray));
      removeDuplicate.push(new DropdownItem(removeDuplicate));
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
        placeholder="Select Style"
        fluid
        selection
        options={beersStyles}
        onChange={onStyleClickHandler}
        value={selectedStyle}
      />

      <Dropdown
        placeholder="Select Titles"
        fluid
        selection
        options={beersTitles}
        onChange={onTitleClickHandler}
      />

      <Dropdown
        placeholder="Select Color"
        fluid
        selection
        options={beersColors}
      />
    </React.Fragment>
  );
};

export default DropdownMenu;
