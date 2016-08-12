import MultiStepProgressItem from '../transpiled/MultiStepProgressItem';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('MultiStepProgressItem', () => {
  let multiStepProgressItem;

  beforeEach(() => {
    multiStepProgressItem = TestUtils.renderIntoDocument(
      <MultiStepProgressItem/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(multiStepProgressItem).parentNode);
  });

  it('defaults to 0 progress', () => {
    let progressSegment;

    progressSegment = TestUtils.findRenderedDOMComponentWithClass(multiStepProgressItem, 'rs-segment');

    expect(progressSegment.props.style).toEqual({ 'width': '0%' });
  });

  it('renders the segment with the given progress', () => {
    let progressSegment;

    multiStepProgressItem = TestUtils.renderIntoDocument(
      <MultiStepProgressItem progress={50} />
    );
    progressSegment = TestUtils.findRenderedDOMComponentWithClass(multiStepProgressItem, 'rs-segment');

    expect(progressSegment.props.style).toEqual({ 'width': '50%' });
  });

  describe('status bar', () => {
    let statusBar;

    const renderWithStatus = (status) => {
      multiStepProgressItem = TestUtils.renderIntoDocument(<MultiStepProgressItem status={status} />);
      statusBar = TestUtils.findRenderedDOMComponentWithClass(multiStepProgressItem, 'rs-bar');
    };

    it('defaults to empty status', () => {
      statusBar = TestUtils.findRenderedDOMComponentWithClass(multiStepProgressItem, 'rs-bar');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-bar');
    });

    it('ok', () => {
      renderWithStatus('ok');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-status-ok');
    });

    it('error', () => {
      renderWithStatus('error');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-status-error');
    });

    it('warning', () => {
      renderWithStatus('warning');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-status-warning');
    });

    it('info', () => {
      renderWithStatus('info');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-status-info');
    });
  });

  describe('type', () => {
    let statusBar;

    const renderWithType = (type) => {
      multiStepProgressItem = TestUtils.renderIntoDocument(<MultiStepProgressItem type={type} />);
      statusBar = TestUtils.findRenderedDOMComponentWithClass(multiStepProgressItem, 'rs-bar');
    };

    it('defaults to empty', () => {
      statusBar = TestUtils.findRenderedDOMComponentWithClass(multiStepProgressItem, 'rs-bar');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-bar');
    });

    it('solid', () => {
      renderWithType('solid');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-bar-solid');
    });

    it('striped', () => {
      renderWithType('striped');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-bar-striped');
    });
  });
});
