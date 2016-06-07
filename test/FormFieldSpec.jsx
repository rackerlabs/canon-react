import FormField from '../transpiled/FormField';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('FormField', () => {
  let formField;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(formField).parentNode);
  });

  describe('when there is an error', () => {
    beforeEach(() => {
      formField = TestUtils.renderIntoDocument(
        <FormField error="Test error message">test</FormField>
      );
    });

    it('adds the error class', () => {
      let controlGroup;

      controlGroup = TestUtils.findRenderedDOMComponentWithClass(formField, 'rs-control-group');
      expect(controlGroup.getDOMNode()).toHaveClass('error');
    });

    it('adds the message to the validation block', () => {
      let message;

      message = TestUtils.findRenderedDOMComponentWithClass(formField, 'rs-validation-block');
      expect(message.getDOMNode().textContent).toBe(' Test error message');
    });
  });

  describe('when there is a fixed error', () => {
    beforeEach(() => {
      formField = TestUtils.renderIntoDocument(
        <FormField success="Test success message">test</FormField>
      );
    });

    it('adds the success class', () => {
      let controlGroup;

      controlGroup = TestUtils.findRenderedDOMComponentWithClass(formField, 'rs-control-group');
      expect(controlGroup.getDOMNode()).toHaveClass('success');
    });

    it('adds the message to the validation block', () => {
      let message;

      message = TestUtils.findRenderedDOMComponentWithClass(formField, 'rs-validation-block');
      expect(message.getDOMNode().textContent).toBe(' Test success message');
    });
  });

  it('adds the help message', () => {
    let message;

    formField = TestUtils.renderIntoDocument(<FormField help="test help message">test</FormField>);
    message = TestUtils.findRenderedDOMComponentWithClass(formField, 'rs-help-block');
    expect(message.getDOMNode().textContent).toBe('test help message');
  });

  it('displays the label', () => {
    let label;

    formField = TestUtils.renderIntoDocument(<FormField label="test label">test</FormField>);
    label = TestUtils.findRenderedDOMComponentWithClass(formField, 'rs-control-label');
    expect(label.getDOMNode().textContent).toBe('test label');
  });
});
