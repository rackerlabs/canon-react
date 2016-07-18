import PopoverBody from '../transpiled/PopoverBody';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('PopoverBody', () => {
  let popoverBody;

  beforeEach(() => {
    popoverBody = TestUtils.renderIntoDocument(
      <PopoverBody className="test-additional-class">
        Hello
      </PopoverBody>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(popoverBody).parentNode);
  });

  it('renders a popover body', () => {
    expect(ReactDOM.findDOMNode(popoverBody)).toHaveClass('rs-popover-body');
  });

  it('adds an additional class', () => {
    expect(ReactDOM.findDOMNode(popoverBody)).toHaveClass('test-additional-class');
  });

  it('renders children', () => {
    expect(ReactDOM.findDOMNode(popoverBody).textContent).toBe('Hello');
  });
});
