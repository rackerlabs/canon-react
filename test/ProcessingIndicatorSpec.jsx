import ProcessingIndicator from '../transpiled/ProcessingIndicator';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('ProcessingIndicator', () => {
  let processingIndicator;

  beforeEach(() => {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(processingIndicator).parentNode);
  });

  it('has the rs-processing-indicator class', () => {
    expect(ReactDOM.findDOMNode(processingIndicator)).toHaveClass('rs-processing-indicator');
  });

  it('renders an icon tag', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(processingIndicator, 'i')).not.toBeNull();
  });

  it('is hidden by default', () => {
    expect(ReactDOM.findDOMNode(processingIndicator)).toHaveClass('rs-hidden');
  });

  it('is not hidden when hidden is false', () => {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator hidden={false}/>
    );

    expect(ReactDOM.findDOMNode(processingIndicator)).not.toHaveClass('rs-hidden');
  });
});
