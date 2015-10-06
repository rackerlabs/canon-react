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

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(popoverFooter).parentNode);
  });

  it('renders a footer button group', () => {
    var buttonGroup;

    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(popoverFooter, 'rs-popover-footer');

    expect(React.findDOMNode(buttonGroup)).toHaveClass('rs-btn-group');
  });

  it('renders additional classes', () => {
    var newFooter, buttonGroup;

    newFooter = TestUtils.renderIntoDocument(
      <PopoverFooter className="second-class">Hello</PopoverFooter>
    );
    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(newFooter, 'rs-popover-footer');

    expect(React.findDOMNode(buttonGroup)).toHaveClass('rs-btn-group');
    expect(React.findDOMNode(buttonGroup)).toHaveClass('second-class');
  });

  it('renders children', () => {
    expect(React.findDOMNode(popoverFooter).textContent).toBe('Hello');
  });
});
