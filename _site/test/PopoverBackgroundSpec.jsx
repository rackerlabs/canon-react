import PopoverBackground from '../transpiled/PopoverBackground';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

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
    backgroundStyle = backgroundElement.getDOMNode().style;

    expect(backgroundStyle.position).toEqual('fixed');
    expect(backgroundStyle.left).toEqual('0px');
    expect(backgroundStyle.top).toEqual('0px');
    expect(backgroundStyle.width).toEqual('100%');
    expect(backgroundStyle.height).toEqual('100%');
    expect(backgroundStyle.zIndex).toEqual('999');
    expect(backgroundStyle['background-color']).toEqual('');
  });

  it('calls the request close callback when clicked', () => {
    TestUtils.Simulate.click(ReactDOM.findDOMNode(popoverBackground));

    expect(requestClose).toHaveBeenCalled();
  });

  it('has a background color when isModal is true', () => {
    let backgroundStyle, backgroundElement;

    popoverBackground = TestUtils.renderIntoDocument(
      <PopoverBackground isModal={true} onRequestClose={requestClose} />
    );

    backgroundElement = TestUtils.findRenderedDOMComponentWithClass(popoverBackground, 'rs-popover-background-overlay');
    backgroundStyle = backgroundElement.getDOMNode().style;

    // can't test for equality due to float errors. Ends up being something like 'rgba(0, 0, 0, 0.496094)'
    expect(backgroundStyle['background-color']).not.toEqual('');
  });
});
