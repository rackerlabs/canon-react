import PopoverFooter from '../transpiled/PopoverFooter';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

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
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(popoverFooter).parentNode);
  });

  it('renders a footer button group', () => {
    var buttonGroup;

    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(popoverFooter, 'rs-popover-footer');

    expect(ReactDOM.findDOMNode(buttonGroup)).toHaveClass('rs-btn-group');
  });

  it('renders additional classes', () => {
    var newFooter, buttonGroup;

    newFooter = TestUtils.renderIntoDocument(
      <PopoverFooter className="second-class">Hello</PopoverFooter>
    );
    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(newFooter, 'rs-popover-footer');

    expect(ReactDOM.findDOMNode(buttonGroup)).toHaveClass('rs-btn-group');
    expect(ReactDOM.findDOMNode(buttonGroup)).toHaveClass('second-class');
  });

  it('renders children', () => {
    expect(ReactDOM.findDOMNode(popoverFooter).textContent).toBe('Hello');
  });
});
