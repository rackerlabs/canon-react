import FormField from '../transpiled/FormField';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('FormField', () => {
  let renderer, formField;

  const renderWithProps = (props) => {
    renderer.render(
      <FormField { ...props }>
        Test Content
      </FormField>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  describe('when there is an error', () => {
    beforeEach(() => {
      renderWithProps({ error: 'Test error message' });
      formField = renderer.getRenderOutput();
    });

    it('adds the error class', () => {
      expect(formField.props.className).toEqual('rs-control-group error');
    });

    it('passes the message to the validation block', () => {
      const controls = formField.props.children[1];
      const validationBlock = controls.props.children[2];

      expect(validationBlock.props.value).toBe('Test error message');
    });
  });

  describe('when there is a fixed error', () => {
    beforeEach(() => {
      renderWithProps({ success: 'Test success message' });
      formField = renderer.getRenderOutput();
    });

    it('adds the success class', () => {
      expect(formField.props.className).toEqual('rs-control-group success');
    });

    it('passes the message to the validation block', () => {
      const controls = formField.props.children[1];
      const validationBlock = controls.props.children[2];

      expect(validationBlock.props.value).toBe('Test success message');
    });
  });

  it('renders the children', () => {
    renderWithProps({ success: 'Test success message' });
    formField = renderer.getRenderOutput();

    const controls = formField.props.children[1];
    const children = controls.props.children[0];

    expect(children).toEqual('Test Content');
  });

  it('passes the help message to the FormFieldHelp', () => {
    renderWithProps({ success: 'Test success message', help: 'Test help message' });
    formField = renderer.getRenderOutput();

    const controls = formField.props.children[1];
    const formFieldHelp = controls.props.children[1];

    expect(formFieldHelp.props.help).toEqual('Test help message');
  });

  it('displays the label', () => {
    renderWithProps({ success: 'Test success message', label: 'Test label' });
    formField = renderer.getRenderOutput();

    const label = formField.props.children[0];

    expect(label.type).toBe('label');
    expect(label.props.className).toBe('rs-control-label');
    expect(label.props.children).toBe('Test label');
  });
});
