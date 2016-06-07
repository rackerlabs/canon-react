import FormFieldValidationBlock from '../transpiled/FormFieldValidationBlock';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('FormFieldValidationBlock', () => {
  it('displays the validation message', () => {
    let message, formFieldValidationBlock;

    formFieldValidationBlock = TestUtils.renderIntoDocument(<FormFieldValidationBlock value="test message" />);
    message = TestUtils.findRenderedDOMComponentWithClass(formFieldValidationBlock, 'rs-validation-block');
    expect(message.getDOMNode().textContent).toBe(' test message');

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(formFieldValidationBlock).parentNode);
  });

  it('returns null if no field is passed to it', () => {
    let results, formFieldValidationBlock;

    formFieldValidationBlock = TestUtils.renderIntoDocument(<FormFieldValidationBlock />);
    results = TestUtils.scryRenderedDOMComponentsWithClass(formFieldValidationBlock, 'rs-validation-block');
    expect(results).toEqual([]);
  });
});
