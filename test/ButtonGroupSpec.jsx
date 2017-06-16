import ButtonGroup from '../transpiled/ButtonGroup';
import Button from '../transpiled/Button';
import React from 'react';
import { shallow } from 'enzyme';

describe('ButtonGroup', () => {
  let buttonGroup, button;

  beforeEach(() => {
    button = <Button className='child-button'>Test</Button>;
    buttonGroup = shallow(
      <ButtonGroup id='button-group' className="extra-class">
        { button }
      </ButtonGroup>
    );
  });

  it('has the right classes', () => {
    expect(buttonGroup.hasClass('rs-btn-group extra-class')).toBe(true);
  });

  it('renders passed in props', () => {
    expect(buttonGroup.prop('id')).toEqual('button-group');
  });

  it('renders passed in children', () => {
    expect(buttonGroup.prop('children')).toEqual(button);
  });
});
