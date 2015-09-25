import PopoverBackground from '../transpiled/PopoverBackground';

import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

describe('PopoverBackground', () => {
  let popoverBackground, requestClose;

  beforeEach(() => {
    requestClose = jasmine.createSpy('requestClose');

    popoverBackground = TestUtils.renderIntoDocument(
      <PopoverBackground onRequestClose={requestClose} />
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(popoverBackground).parentNode);
  });

  it('renders over the entire page to block events from other elements', () => {
    let backgroundStyle, backgroundElement;

    backgroundElement = TestUtils.findRenderedDOMComponentWithClass(popoverBackground, 'rs-popover-background-overlay');
    backgroundStyle = backgroundElement.getDOMNode().style;

    expect(backgroundStyle.position).toEqual('fixed');
    expect(backgroundStyle.left).toEqual('0px');
    expect(backgroundStyle.top).toEqual('0px');
    expect(backgroundStyle.width).toEqual('100%');
    expect(backgroundStyle.height).toEqual('100%');
    expect(backgroundStyle.zIndex).toEqual('999');
  });

  it('calls the request close callback when clicked', () => {
    TestUtils.Simulate.click(React.findDOMNode(popoverBackground));

    expect(requestClose).toHaveBeenCalled();
  });
});
