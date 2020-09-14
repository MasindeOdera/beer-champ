import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Header from './index';

const setUp = (props={}) => {
    const component = shallow(<Header />); 
    return component;
};

describe('Header Component', () => {

    //The shallow render is stored in component.
    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Should render without errors.', () => {
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo.', () => {
        const wrapper = findByTestAttr(component, 'logoIMG');
        expect(wrapper.length).toBe(1);
    });
});