import FormFieldHelp from '../transpiled/FormFieldHelp';
import React from 'react';
import { shallow } from 'enzyme';

describe('FormFieldHelp', () => {
  it('displays the help message', () => {
    const formFieldHelp = shallow(<FormFieldHelp help="test message" />);

    expect(formFieldHelp.prop('children')).toEqual('test message');
  });

  it('renders noscript if no field is passed to it', () => {
    const formFieldHelp = shallow(<FormFieldHelp />);

    expect(formFieldHelp.type()).toBe('noscript');
  });
});
