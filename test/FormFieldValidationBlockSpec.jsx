import FormFieldValidationBlock from '../transpiled/FormFieldValidationBlock';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('FormFieldValidationBlock', () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('displays the validation indicator icon', () => {
    renderer.render(<FormFieldValidationBlock value="test message" />);
    const formFieldValidationBlock = renderer.getRenderOutput();

    expect(formFieldValidationBlock.props.children[0].type).toBe('i');
    expect(formFieldValidationBlock.props.children[0].props.className).toEqual('rs-validation-indicator');
  });

  it('displays the validation message', () => {
    renderer.render(<FormFieldValidationBlock value="test message" />);
    const formFieldValidationBlock = renderer.getRenderOutput();

    expect(formFieldValidationBlock.props.children[1]).toEqual(' ');
    expect(formFieldValidationBlock.props.children[2]).toEqual('test message');
  });

  it('returns null if no field is passed to it', () => {
    renderer.render(<FormFieldValidationBlock />);
    const formFieldValidationBlock = renderer.getRenderOutput();

    expect(formFieldValidationBlock.type).toBe('noscript');
  });
});
