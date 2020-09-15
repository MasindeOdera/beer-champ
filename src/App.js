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
  console.log(globalState);

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
      dispatch({ type: 'GET_LIST', payload: data });
      let beerList = data;
      beerList.forEach((beer) => {
        console.log(beer.title);
        console.log(beer.style);
        console.log(beer.colors);
      });
    });
  }, [dispatch]);

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
