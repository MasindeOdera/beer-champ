import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import { store } from "./../../context/appStore.js";
import "./styles.scss";

function BeerList() {
  const globalState = useContext(store);
  const { selection, beer, color } = globalState.state;

  const finalBeer = [];
  if (beer.length > 0) {
    let finalChoice = selection.filter((item) => item.title === beer);
    finalBeer.push(finalChoice);
  }

  const beerDetail = selection.map((detail, index) => (
    <Card key={index}>
      <Card.Content>
        <Image floated="right" size="mini" src={detail.images[0].image} />
        <Card.Header>{detail.title}</Card.Header>
        <Card.Meta>{detail.style}</Card.Meta>
        <Card.Meta>Alcohol Percentage: {detail.alcoholPercentage}%</Card.Meta>
        <br />
        <Card.Header>
          Price: <strong>{detail.displayInformationPrice.price}</strong>
        </Card.Header>
      </Card.Content>
    </Card>
  ));

  const finalOption =
    beer.length > 0
      ? finalBeer[0].map((option, index) => (
          <Card key={index}>
            <Card.Content>
              <Image floated="right" size="mini" src={option.images[0].image} />
              <Card.Header>{option.title}</Card.Header>
              <Card.Meta>{option.style}</Card.Meta>
              <Card.Meta>
                Alcohol Percentage: {option.alcoholPercentage}%
              </Card.Meta>
              <br />
              <Card.Header>
                Price: <strong>{option.displayInformationPrice.price}</strong>
              </Card.Header>
            </Card.Content>
          </Card>
        ))
      : null;
  
  const selectedColor =
    beer.length > 0
      ? finalBeer[0].map((option, index) => (
          <Card key={index}>
            <Card.Content>
              <Image floated="right" size="mini" src={option.images[0].image} />
              <Card.Header>{option.title}</Card.Header>
              <Card.Meta>{option.style}</Card.Meta>
              <Card.Meta>
                Alcohol Percentage: {option.alcoholPercentage}%
              </Card.Meta>
              <Card.Meta>
                Colour: {color.toUpperCase()}
              </Card.Meta>
              <br />
              <Card.Header>
                Price: <strong>{option.displayInformationPrice.price}</strong>
              </Card.Header>
            </Card.Content>
          </Card>
        ))
      : null;

  return (
    <div className="list">
      {selection.length > 0 ? <h2>Beer Options</h2> : null}
      <Card.Group>
        { beer.length === 0 ? beerDetail : null }
        { color.length === 0 ? finalOption : selectedColor }
      </Card.Group>
    </div>
  );
}

export default BeerList;
