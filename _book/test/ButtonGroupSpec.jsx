import ButtonGroup from '../transpiled/ButtonGroup';
import Button from '../transpiled/Button';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('ButtonGroup', () => {
  let buttonGroup, button, renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    button = <Button className='child-button'>Test</Button>;
    renderer.render(
      <ButtonGroup id='button-group' className="extra-class">
        { button }
      </ButtonGroup>
    );

    buttonGroup = renderer.getRenderOutput();
  });

  it('has the right classes', () => {
    expect(buttonGroup.props.className).toEqual('rs-btn-group extra-class');
  });

  it('renders passed in props', () => {
    expect(buttonGroup.props.id).toEqual('button-group');
  });

  it('renders passed in children', () => {
    expect(buttonGroup.props.children).toEqual(button);
  });
});
