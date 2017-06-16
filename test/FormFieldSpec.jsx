import FormField from '../transpiled/FormField';
import React from 'react';
import { shallow } from 'enzyme';

describe('FormField', () => {
  let formField;

  const renderWithProps = (props) => {
    if (('label' in props) === false) {
      props['label'] = 'label';
    }
    return shallow(
      <FormField { ...props }>
        Test Content
      </FormField>
    );
  };

  describe('when there is an error', () => {
    beforeEach(() => {
      formField = renderWithProps({ error: 'Test error message' });
    });

    it('adds the error class', () => {
      expect(formField.hasClass('rs-control-group error')).toBe(true);
    });

    it('passes the message to the validation block', () => {
      const controls = formField.childAt(1);
      const validationBlock = controls.childAt(2);

      expect(validationBlock.prop('value')).toBe('Test error message');
    });
  });

  describe('when there is inline validation', () => {
    beforeEach(() => {
      formField = renderWithProps({ inlineValidation: true });
    });

    it('passes the inline validation bool to the validation block', () => {
      const controls = formField.childAt(1);
      const validationBlock = controls.childAt(2);

      expect(validationBlock.prop('inline')).toBe(true);
    });
  });

  describe('when there is a success message', () => {
    beforeEach(() => {
      formField = renderWithProps({ success: 'Test success message' });
    });

    it('adds the success class', () => {
      expect(formField.hasClass('rs-control-group success')).toBe(true);
    });

    it('passes the message to the validation block', () => {
      const controls = formField.childAt(1);
      const validationBlock = controls.childAt(2);

      expect(validationBlock.prop('value')).toBe('Test success message');
    });
  });

  describe('when success is true', () => {
    beforeEach(() => {
      formField = renderWithProps({ success: true });
    });

    it('adds the success class', () => {
      expect(formField.hasClass('rs-control-group success')).toBe(true);
    });
  });

  it('renders the children', () => {
    formField = renderWithProps({ success: 'Test success message' });

    const controls = formField.childAt(1);
    const children = controls.childAt(0);

    expect(children.equals('Test Content')).toBe(true);
  });

  it('renders passed in dom properties', () => {
    formField = renderWithProps({ id: 'form-field-id', className: 'form-field-class' });

    expect(formField.prop('id')).toEqual('form-field-id');
    expect(formField.hasClass('form-field-class rs-control-group')).toBe(true);
  });

  it('passes the help message to the FormFieldHelp', () => {
    formField = renderWithProps({ success: 'Test success message', help: 'Test help message' });

    const controls = formField.childAt(1);
    const formFieldHelp = controls.childAt(1);

    expect(formFieldHelp.prop('help')).toEqual('Test help message');
  });

  it('displays the label', () => {
    formField = renderWithProps({ success: 'Test success message', label: 'Test label' });

    const label = formField.childAt(0);

    expect(label.type()).toBe('label');
    expect(label.hasClass('rs-control-label')).toBe(true);
    expect(label.prop('children')).toBe('Test label');
  });
});
