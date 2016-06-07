import FormFieldHelp from '../transpiled/FormFieldHelp';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('FormFieldHelp', () => {
  it('displays the help message', () => {
    let message, formFieldHelp;

    formFieldHelp = TestUtils.renderIntoDocument(<FormFieldHelp help="test message" />);
    message = TestUtils.findRenderedDOMComponentWithClass(formFieldHelp, 'rs-help-block');
    expect(message.getDOMNode().textContent).toBe('test message');

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(formFieldHelp).parentNode);
  });

  it('returns null if no field is passed to it', () => {
    let results, formFieldHelp;

    formFieldHelp = TestUtils.renderIntoDocument(<FormFieldHelp />);
    results = TestUtils.scryRenderedDOMComponentsWithClass(formFieldHelp, 'rs-help-block');
    expect(results).toEqual([]);
  });
});
