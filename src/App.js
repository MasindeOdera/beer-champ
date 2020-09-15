import React, { useContext, useEffect } from 'react';
import { store } from './context/appStore.js';
import Header from './components/header';
import DropdownBeerStyle from './components/dropdownBeerStyle';
import DropdownBeerName from './components/dropdownBeerName';
import DropdownBeerColor from './components/dropdownBeerColor';
import beerChamp from './service/beers';
import './App.scss';

function App() {

  const globalState = useContext(store);
  const { beerList } = globalState.state;
  const { dispatch } = globalState;

  console.log({beerList});

  if(beerList) {
    // beerList.forEach(function (beer) {
    //   console.log(beer.colors);
    //   let variousColors = [];
    //   variousColors.push(beer.colors);
    // });
    // const variousColors = (beerList) => beerList.filter(colors => beerList.colors);
    // console.log(variousColors);
    // const variousColors =  beerList.filter(function(beer) {
    //   return beer.colors;
    // });
    // console.log(variousColors);
  };

  useEffect(() => {
    beerChamp.fetchData(function(err, data) {
      //Make the list of beers available.
      dispatch({ type: 'SET_LIST', payload: data });
      let beerList = data;
      //Create source for Menu Styles content
      const stylesArray = []
      beerList.map((item) => {
        return stylesArray.push(item.style);
      });
      console.log(stylesArray);
      //Remove duplicate terms, some beers have more than one option.
      let removeDuplicate = Array.from(new Set(stylesArray));
      console.log(removeDuplicate);
      //Share the list of beer styles.
      dispatch({ type: 'SET_STYLES', payload: removeDuplicate });

      //Create source for Menu Title content
      const titlesArray = []
      beerList.map((item) => {
        return titlesArray.push(item.title);
      });
      console.log(titlesArray);
      //Share the list of beer styles.
      dispatch({ type: 'SET_NAMES', payload: titlesArray });

      //Create source for Menu Title content
      const colorsArray = []
      let removeDuplicateColor = []
      beerList.map((item) => {
        colorsArray.push(...item.colors);
        //Remove duplicate terms, some beers have more than one color.
        removeDuplicateColor = Array.from(new Set(colorsArray));
        return removeDuplicateColor;
      });
      console.log(removeDuplicateColor);
      dispatch({ type: 'SET_COLORS', payload: removeDuplicateColor });

      // beerList.forEach((beer) => {
      //   console.log(beer.title);
      //   console.log(beer.style);
      //   console.log(beer.colors);
      // });
    });
  }, [dispatch]);
  console.log(globalState.state);

  return (
    <div className="App">
      <Header />
      <h4>Enjoy our beers!</h4>
      <main>
        <DropdownBeerStyle />
        <DropdownBeerName />
        <DropdownBeerColor />
      </main>
    </div>
  );
}

export default App;
