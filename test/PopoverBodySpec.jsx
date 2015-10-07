import PopoverBody from '../transpiled/PopoverBody';

import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

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
    React.unmountComponentAtNode(React.findDOMNode(popoverBody).parentNode);
  });

  it('renders a popover body', () => {
    expect(React.findDOMNode(popoverBody)).toHaveClass('rs-popover-body');
  });

  it('adds an additional class', () => {
    expect(React.findDOMNode(popoverBody)).toHaveClass('test-additional-class');
  });

  it('renders children', () => {
    expect(React.findDOMNode(popoverBody).textContent).toBe('Hello');
  });
});
