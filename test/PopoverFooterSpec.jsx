import PopoverFooter from '../transpiled/PopoverFooter';

import ButtonGroup from '../transpiled/ButtonGroup';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('PopoverFooter', () => {
  let popoverFooter, renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(
      <PopoverFooter className="test-additional-class">
        Hello
      </PopoverFooter>
    );
    popoverFooter = renderer.getRenderOutput();
  });

  it('renders a popover body with additional class', () => {
    expect(popoverFooter.type).toBe(ButtonGroup);
    expect(popoverFooter.props.className).toEqual('rs-popover-footer test-additional-class');
  });

  it('renders children', () => {
    expect(popoverFooter.props.children).toEqual('Hello');
  });
});
