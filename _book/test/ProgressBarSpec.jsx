import ProgressBar from '../transpiled/ProgressBar';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('ProgressBar', () => {
  let progressBar;

  beforeEach(() => {
    progressBar = TestUtils.renderIntoDocument(
      <ProgressBar/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(progressBar).parentNode);
  });

  it('renders the progress container', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-progress')).not.toBeNull();
  });

  it('renders the inner progress container', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-progress-inner')).not.toBeNull();
  });

  it('defaults to 0 progress', () => {
    let progressSegment;

    progressSegment = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-segment');

    expect(progressSegment.props.style).toEqual({ 'width': '0%' });
  });

  it('renders the segment with the given progress', () => {
    let progressSegment;

    progressBar = TestUtils.renderIntoDocument(
      <ProgressBar progress={50} />
    );
    progressSegment = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-segment');

    expect(progressSegment.props.style).toEqual({ 'width': '50%' });
  });

  describe('status bar', () => {
    let statusBar;

    const renderWithStatus = (status) => {
      progressBar = TestUtils.renderIntoDocument(<ProgressBar status={status} />);
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');
    };

    it('defaults to ok status', () => {
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-status-ok');
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
      progressBar = TestUtils.renderIntoDocument(<ProgressBar type={type} />);
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');
    };

    it('defaults to solid', () => {
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');

      expect(ReactDOM.findDOMNode(statusBar)).toHaveClass('rs-bar-solid');
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

  describe('size', () => {
    const renderWithSize = (size) => {
      progressBar = TestUtils.renderIntoDocument(<ProgressBar size={size} />);
    };

    it('defaults to no size', () => {
      expect(ReactDOM.findDOMNode(progressBar).className).toBe('rs-progress');
    });

    it('xsmall', () => {
      renderWithSize('xsmall');

      expect(ReactDOM.findDOMNode(progressBar)).toHaveClass('rs-progress-xsmall');
    });

    it('small', () => {
      renderWithSize('small');

      expect(ReactDOM.findDOMNode(progressBar)).toHaveClass('rs-progress-small');
    });

    it('medium', () => {
      renderWithSize('medium');

      expect(ReactDOM.findDOMNode(progressBar)).toHaveClass('rs-progress-medium');
    });

    it('large', () => {
      renderWithSize('large');

      expect(ReactDOM.findDOMNode(progressBar)).toHaveClass('rs-progress-large');
    });

    it('xlarge', () => {
      renderWithSize('xlarge');

      expect(ReactDOM.findDOMNode(progressBar)).toHaveClass('rs-progress-xlarge');
    });
  });
});
