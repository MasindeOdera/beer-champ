import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Style 1', value: 1 },
  { key: 2, text: 'Style 2', value: 2 },
  { key: 3, text: 'Style 3', value: 3 },
];

const DropdownBeerStyle = () => (
  <Menu compact data-test="beerStyle">
    <Dropdown text='Beer Style' options={options} simple item />
  </Menu>
)

export default DropdownBeerStyle;