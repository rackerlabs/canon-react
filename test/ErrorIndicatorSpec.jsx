import ErrorIndicator from '../transpiled/ErrorIndicator';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('ErrorIndicator', () => {
  let renderer, indicator;

  const renderWithProps = (props) => {
    renderer.render(
      <ErrorIndicator { ...props } />
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  describe('when value is passed in', () => {
    beforeEach(() => {
      renderWithProps({ value: 'test message' });
      indicator = renderer.getRenderOutput();
    });

    it('has the correct error class', () => {
      expect(indicator.props.className).toEqual('rs-status-error');
    });

    it('displays the validation message', () => {
      expect(indicator.props.children).toBe('test message');
    });
  });

  it('returns noscript tag if no field is passed to it', () => {
    renderWithProps({});
    indicator = renderer.getRenderOutput();

    expect(indicator.type).toBe('noscript');
  });
});
