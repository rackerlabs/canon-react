import ErrorIndicator from '../transpiled/ErrorIndicator';
import React from 'react';
import { shallow } from 'enzyme';

describe('ErrorIndicator', () => {
  let indicator;

  const renderWithProps = (props) => {
    return shallow(
      <ErrorIndicator { ...props } />
    );
  };

  describe('when value is passed in', () => {
    beforeEach(() => {
      indicator = renderWithProps({ value: 'test message' });
    });

    it('has the correct error class', () => {
      expect(indicator.hasClass('rs-status-error')).toBe(true);
    });

    it('displays the validation message', () => {
      expect(indicator.prop('children')).toBe('test message');
    });
  });

  it('returns noscript tag if no field is passed to it', () => {
    indicator = renderWithProps({});

    expect(indicator.type()).toBe('noscript');
  });
});
