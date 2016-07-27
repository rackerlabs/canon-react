import StatusIndicator from '../transpiled/StatusIndicator';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('StatusIndicator', () => {
  let statusIndicator;

  beforeEach(() => {
    statusIndicator = TestUtils.renderIntoDocument(
      <StatusIndicator id='statusindicator-id' className='test-statusindicator-class'>Status Indicator Text</StatusIndicator>
    );
  });

  it('creates the default statusindicator', () => {
    expect(statusIndicator.props.hidden).toBe(false);
    expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('ok');
  });

  it('renders a span', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(statusIndicator, 'span')).not.toBeNull();
  });

  it('keeps the passed in classes', () => {
    expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('test-statusindicator-class');
  });

  it('keeps all passed in properties', () => {
    expect(ReactDOM.findDOMNode(statusIndicator).id).toBe('statusindicator-id');
  });

  it('renders the text of the statusindicator', () => {
    expect(ReactDOM.findDOMNode(statusIndicator).textContent).toBe('Status Indicator Text');
  });

  it('is not hidden when hidden is false', () => {
    expect(ReactDOM.findDOMNode(statusIndicator)).not.toHaveClass('rs-hidden');
  });

  it('is hidden when hidden is true', () => {
    statusIndicator = TestUtils.renderIntoDocument(
      <StatusIndicator hidden={true}>StatusIndicator Text</StatusIndicator>
    );

    expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-hidden');
  });

  describe('statusindicator types', () => {
    it('ok', () => {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='ok'>StatusIndicator Text</StatusIndicator>
      );

      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status');
      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status-ok');
    });

    it('processing', () => {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='processing'>StatusIndicator Text</StatusIndicator>
      );

      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status');
      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status-processing');
    });

    it('warning', () => {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='warning'>StatusIndicator Text</StatusIndicator>
      );

      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status');
      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status-warning');
    });

    it('error', () => {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='error'>StatusIndicator Text</StatusIndicator>
      );

      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status');
      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status-error');
    });

    it('disabled', () => {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='disabled'>StatusIndicator Text</StatusIndicator>
      );

      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status');
      expect(ReactDOM.findDOMNode(statusIndicator)).toHaveClass('rs-status-disabled');
    });
  });
});
