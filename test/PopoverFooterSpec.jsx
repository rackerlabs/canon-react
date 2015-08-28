import PopoverFooter from '../transpiled/PopoverFooter';

import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('PopoverFooter', () => {
  let popoverFooter;

  beforeEach(() => {
    popoverFooter = TestUtils.renderIntoDocument(
      <PopoverFooter>
        Hello
      </PopoverFooter>
    );
  });

  it('renders a footer button group', () => {
    var buttonGroup;

    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(popoverFooter, 'rs-popover-footer');

    expect(React.findDOMNode(buttonGroup)).toHaveClass('rs-btn-group');
  });

  it('renders children', () => {
    expect(React.findDOMNode(popoverFooter).textContent).toBe('Hello');
  });
});
