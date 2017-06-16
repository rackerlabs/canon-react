import PopoverFooter from '../transpiled/PopoverFooter';

import ButtonGroup from '../transpiled/ButtonGroup';
import React from 'react';
import { shallow } from 'enzyme';

describe('PopoverFooter', () => {
  let popoverFooter;

  beforeEach(() => {
    popoverFooter = shallow(
      <PopoverFooter className="test-additional-class">
        Hello
      </PopoverFooter>
    );
  });

  it('renders a popover body with additional class', () => {
    expect(popoverFooter.type()).toBe(ButtonGroup);
    expect(popoverFooter.hasClass('rs-popover-footer test-additional-class')).toBe(true);
  });

  it('renders children', () => {
    expect(popoverFooter.children().equals('Hello')).toBe(true);
  });
});
