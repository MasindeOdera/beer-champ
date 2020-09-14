import React, { useEffect, useState } from 'react';
import Header from './components/header';
import DropdownBeerStyle from './components/dropdownBeerStyle';
import DropdownBeerName from './components/dropdownBeerName';
import DropdownBeerColor from './components/dropdownBeerColor';
import beerChamp from './service/beers';
import './App.scss';

function App() {

  const [beers, setBeers] = useState([]);
  console.log(beers);

  if(beers) {
    beers.forEach(function (beer) {
      console.log(beer.colors);
      console.log(beer.style);
  });
  }

  useEffect(() => {
    beerChamp.fetchData(function(err, data) {
      setBeers(data);
    });
  }, []);

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
