import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import { store } from "./../../context/appStore.js";
import "./styles.scss";

function BeerList() {
  const globalState = useContext(store);
  const { selection, beer } = globalState.state;

  console.log(selection, beer);

  const beerDetail = selection.map((beer, index) => (
    <Card>
      <Card.Content key={index}>
        <Image floated="right" size="mini" src={beer.images[0].image} />
        <Card.Header>{beer.title}</Card.Header>
        <Card.Meta>{beer.style}</Card.Meta>
        <Card.Meta>Alcohol Percentage:{beer.alcoholPercentage}%</Card.Meta>
        <br />
        <Card.Header>
          Price:<strong>{beer.displayInformationPrice.price}</strong>
        </Card.Header>
      </Card.Content>
    </Card>
  ));

  return (
    <div className="list">
      {selection.length > 0 ? <h2>Beer Options</h2> : null}
      <Card.Group>{beerDetail}</Card.Group>
    </div>
  );
}

export default BeerList;
