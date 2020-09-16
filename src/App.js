import React from "react";
import Header from "./components/header";
import DropdownMenu from "./components/dropdownMenu";
import "./App.scss";

function App() {
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
