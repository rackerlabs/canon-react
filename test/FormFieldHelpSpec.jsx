import FormFieldHelp from '../transpiled/FormFieldHelp';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('FormFieldHelp', () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('displays the help message', () => {
    renderer.render(<FormFieldHelp help="test message" />);
    const formFieldHelp = renderer.getRenderOutput();

    expect(formFieldHelp.props.children).toEqual('test message');
  });

  it('renders noscript if no field is passed to it', () => {
    renderer.render(<FormFieldHelp />);
    const formFieldHelp = renderer.getRenderOutput();

    expect(formFieldHelp.type).toBe('noscript');
  });
});
