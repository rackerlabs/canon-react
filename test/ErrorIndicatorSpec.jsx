import ErrorIndicator from '../transpiled/ErrorIndicator';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('ErrorIndicator', () => {
  it('displays the validation message', () => {
    let message, errorIndicator;

    errorIndicator = TestUtils.renderIntoDocument(<ErrorIndicator value="test message" />);
    message = TestUtils.findRenderedDOMComponentWithClass(errorIndicator, 'rs-status-error');
    expect(message.getDOMNode().textContent).toBe('test message');

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(errorIndicator).parentNode);
  });

  it('returns null if no field is passed to it', () => {
    let results, errorIndicator;

    errorIndicator = TestUtils.renderIntoDocument(<ErrorIndicator />);
    results = TestUtils.scryRenderedDOMComponentsWithClass(errorIndicator, 'rs-status-error');
    expect(results).toEqual([]);
  });
});
