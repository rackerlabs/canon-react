import ProgressBar from '../transpiled/ProgressBar';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('ProgressBar', () => {
  let progressBar;

  beforeEach(() => {
    progressBar = ReactTestUtils.renderIntoDocument(
      <ProgressBar/>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(progressBar).parentNode);
  });

  it('renders the progress container', () => {
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-progress')).not.toBeNull();
  });

  it('renders the inner progress container', () => {
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-progress-inner')).not.toBeNull();
  });

  it('defaults to 0 progress', () => {
    let progressSegment;

    progressSegment = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-segment');

    expect(progressSegment.style.width).toEqual('0%');
  });

  it('renders the segment with the given progress', () => {
    let progressSegment;

    progressBar = ReactTestUtils.renderIntoDocument(
      <ProgressBar progress={50} />
    );
    progressSegment = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-segment');

    expect(progressSegment.style.width).toEqual('50%');
  });

  describe('status bar', () => {
    let statusBar;

    const renderWithStatus = (status) => {
      progressBar = ReactTestUtils.renderIntoDocument(<ProgressBar status={status} />);
      statusBar = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');
    };

    it('defaults to ok status', () => {
      statusBar = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');

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
      progressBar = ReactTestUtils.renderIntoDocument(<ProgressBar type={type} />);
      statusBar = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');
    };

    it('defaults to solid', () => {
      statusBar = ReactTestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');

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
      progressBar = ReactTestUtils.renderIntoDocument(<ProgressBar size={size} />);
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
