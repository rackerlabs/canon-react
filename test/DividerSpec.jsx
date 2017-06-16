import Divider from '../transpiled/Divider';
import React from 'react';
import { shallow } from 'enzyme';

describe('Divider', () => {
  let divider;

  beforeEach(() => {
    divider = shallow(<Divider/>);;
  });

  it('renders a divider', () => {
    expect(divider.type()).toBe('li');
  });

  it('has the correct class', () => {
    expect(divider.hasClass('rs-divider')).toBe(true);
  });
});
