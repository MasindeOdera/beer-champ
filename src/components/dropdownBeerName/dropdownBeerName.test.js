import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import DropdownBeerName from './index';

const setUp = (props={}) => {
    const component = shallow(<DropdownBeerName />); 
    return component;
};

describe('DropdownBeerStyle Component', () => {

    //The shallow render is stored in component.
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors.', () => {
        const wrapper = findByTestAttr(component, 'beerName');
        expect(wrapper.length).toBe(1);
    });

});