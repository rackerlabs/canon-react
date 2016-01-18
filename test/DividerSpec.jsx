import Divider from '../transpiled/Divider';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Divider', () => {
  let divider;

  beforeEach(() => {
    divider = TestUtils.renderIntoDocument(
      <Divider/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(divider).parentNode);
  });

  it('renders a divider', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(divider, 'li')).not.toBeNull();
  });

  it('has the correct class', () => {
    expect(ReactDOM.findDOMNode(divider)).toHaveClass('rs-divider');
  });
});
