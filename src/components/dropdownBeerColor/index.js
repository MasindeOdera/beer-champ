import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Color 1', value: 1 },
  { key: 2, text: 'Color 2', value: 2 },
  { key: 3, text: 'Color 3', value: 3 },
]

const DropdownBeerColor = () => (
  <Menu compact data-test="beerColor">
    <Dropdown text='Beer Color' options={options} simple item />
  </Menu>
)

export default DropdownBeerColor;