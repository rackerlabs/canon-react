import PopoverBackground from '../transpiled/PopoverBackground';

import React from 'react/addons';
import ReactDOM from 'react-dom';
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
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(popoverBackground).parentNode);
  });

  it('renders over the entire page to block events from other elements', () => {
    let backgroundStyle, backgroundElement;

    backgroundElement = TestUtils.findRenderedDOMComponentWithClass(popoverBackground, 'rs-popover-background-overlay');
    backgroundStyle = ReactDOM.findDOMNode(backgroundElement).style;

    expect(backgroundStyle.position).toEqual('fixed');
    expect(backgroundStyle.left).toEqual('0px');
    expect(backgroundStyle.top).toEqual('0px');
    expect(backgroundStyle.width).toEqual('100%');
    expect(backgroundStyle.height).toEqual('100%');
    expect(backgroundStyle.zIndex).toEqual('999');
  });

  it('calls the request close callback when clicked', () => {
    TestUtils.Simulate.click(ReactDOM.findDOMNode(popoverBackground));

    expect(requestClose).toHaveBeenCalled();
  });
});
