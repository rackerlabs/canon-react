import Divider from '../transpiled/Divider';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Divider', () => {
  let divider, renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(<Divider/>);
    divider = renderer.getRenderOutput();
  });

  it('renders a divider', () => {
    expect(divider.type).toBe('li');
  });

  it('has the correct class', () => {
    expect(divider.props.className).toBe('rs-divider');
  });
});
