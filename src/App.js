import React, { useEffect, useState } from 'react';
import Header from './components/header';
import beerChamp from './service/beers';
import './App.scss';

function App() {

  const [beers, setBeers] = useState([]);
  console.log(beers);

  useEffect(() => {
    beerChamp.fetchData(function(err, data) {
      setBeers(data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
