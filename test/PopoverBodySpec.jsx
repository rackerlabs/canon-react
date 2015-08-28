import PopoverBody from '../transpiled/PopoverBody';

import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('PopoverBody', () => {
  let popoverBody;

  beforeEach(() => {
    popoverBody = TestUtils.renderIntoDocument(
      <PopoverBody>
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

  it('renders children', () => {
    expect(React.findDOMNode(popoverBody).textContent).toBe('Hello');
  });
});
