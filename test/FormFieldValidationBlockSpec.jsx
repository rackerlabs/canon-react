import FormFieldValidationBlock from '../transpiled/FormFieldValidationBlock';
import React from 'react';
import { shallow } from 'enzyme';

describe('FormFieldValidationBlock', () => {
  it('displays the validation indicator icon', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock value="test message" />);

    expect(formFieldValidationBlock.childAt(0).type()).toBe('i');
    expect(formFieldValidationBlock.childAt(0).hasClass('rs-validation-indicator')).toBe(true);
  });

  it('displays the validation message', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock value="test message" />);

    expect(formFieldValidationBlock.childAt(1).equals(' ')).toBe(true);
    expect(formFieldValidationBlock.childAt(2).equals('test message')).toBe(true);
  });

  it('has the rs-validation-block class when not inline', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock value="test message" />);

    expect(formFieldValidationBlock.hasClass('rs-validation-block')).toBe(true);
  });

  it('has the rs-validation-inline class when inline', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock value="test message" inline />);

    expect(formFieldValidationBlock.hasClass('rs-validation-inline')).toBe(true);
  });

  it('returns null if false is passed to it', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock value={ false } />);

    expect(formFieldValidationBlock.type()).toBe('noscript');
  });

  it('returns null if no field is passed to it', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock />);

    expect(formFieldValidationBlock.type()).toBe('noscript');
  });

  it('has a text-top vertical align style', () => {
    const formFieldValidationBlock = shallow(<FormFieldValidationBlock value="test message" />);

    expect(formFieldValidationBlock.prop('style')['vertical-align']).toEqual('text-top');
  });
});
