import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Name 1', value: 1 },
  { key: 2, text: 'Name 2', value: 2 },
  { key: 3, text: 'Name 3', value: 3 },
]

const DropdownBeerName = () => (
  <Menu compact data-test="beerName">
    <Dropdown text='Beer Name' options={options} simple item />
  </Menu>
)

export default DropdownBeerName;