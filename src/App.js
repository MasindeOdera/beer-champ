import React, { useEffect, useContext } from 'react';
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

  // const [beers, setBeers] = useState([]);
  // console.log(beers);

  // if(beers) {
  //   beers.forEach(function (beer) {
  //     // console.log(beer.colors);
  //     // console.log(beer.style);
  // });
  // }
  console.log({beerList});

  useEffect(() => {
    beerChamp.fetchData(function(err, data) {
      // setBeers(data);
      dispatch({ type: 'GET_LIST', payload: data });
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
