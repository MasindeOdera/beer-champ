import React, { useEffect } from "react";
// import { store } from "./context/appStore.js";
import Header from "./components/header";
// import DropdownBeerStyle from './components/dropdownBeerStyle';
// import DropdownBeerName from './components/dropdownBeerName';
// import DropdownBeerColor from './components/dropdownBeerColor';
import DropdownMenu from "./components/dropdownMenu";
// import { DropdownMenu } from "semantic-ui-react";
import beerChamp from "./service/beers";
import "./App.scss";

function App() {
  // const globalState = useContext(store);
  // const { beerList } = globalState.state;
  // const { dispatch } = globalState;

  useEffect(() => {
    beerChamp.fetchData(function (err, data) {
      //Make the list of beers available.
      // dispatch({ type: "SET_LIST", payload: data });

      let beerList = data;
      //Create source for Menu Styles content
      const stylesArray = [];
      data.map((item) => {
        return stylesArray.push(item.style);
      });

      //Remove duplicate terms, some beers have more than one option.
      // let removeDuplicate = Array.from(new Set(stylesArray));

      //Share the list of beer styles.
      // dispatch({ type: "SET_STYLES", payload: removeDuplicate });

      //Create source for Menu Title content
      const titlesArray = [];
      beerList.map((item) => {
        return titlesArray.push(item.title);
      });

      //Share the list of beer styles.
      // dispatch({ type: "SET_NAMES", payload: titlesArray });

      //Create source for Menu Title content
      // const colorsArray = [];
      // beerList.map((item) => {
      //   colorsArray.push(...item.colors);
      //   //Remove duplicate terms, some beers have more than one color.
      //   removeDuplicateColor = Array.from(new Set(colorsArray));
      //   return removeDuplicateColor;
      // });

      //Share the list of beer colors.
      // dispatch({ type: "SET_COLORS", payload: removeDuplicateColor });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <h4>Enjoy our beers!</h4>
      <main>
        <DropdownMenu />
      </main>
    </div>
  );
}

export default App;
