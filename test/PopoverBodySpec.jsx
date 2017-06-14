import PopoverBody from '../transpiled/PopoverBody';

import React from 'react';
import { shallow } from 'enzyme';

describe('PopoverBody', () => {
  let popoverBody;

  beforeEach(() => {
    popoverBody = shallow(
      <PopoverBody className="test-additional-class">
        Hello
      </PopoverBody>
    );
  });

  it('renders a popover body with additional class', () => {
    expect(popoverBody.type()).toBe('div');
    expect(popoverBody.hasClass('rs-popover-body test-additional-class')).toBe(true);
  });

  it('renders children', () => {
    expect(popoverBody.children().equals('Hello')).toBe(true);
  });
});
