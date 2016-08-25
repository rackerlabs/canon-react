import PopoverBody from '../transpiled/PopoverBody';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('PopoverBody', () => {
  let popoverBody, renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(
      <PopoverBody className="test-additional-class">
        Hello
      </PopoverBody>
    );
    popoverBody = renderer.getRenderOutput();
  });

  it('renders a popover body with additional class', () => {
    expect(popoverBody.type).toBe('div');
    expect(popoverBody.props.className).toEqual('rs-popover-body test-additional-class');
  });

  it('renders children', () => {
    expect(popoverBody.props.children).toEqual('Hello');
  });
});
