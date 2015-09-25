import ProgressBar from '../transpiled/ProgressBar';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('ProgressBar', () => {
  let progressBar;

  beforeEach(() => {
    progressBar = TestUtils.renderIntoDocument(
      <ProgressBar/>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(progressBar).parentNode);
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

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-status-ok');
    });

    it('ok', () => {
      renderWithStatus('ok');

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-status-ok');
    });

    it('error', () => {
      renderWithStatus('error');

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-status-error');
    });

    it('warning', () => {
      renderWithStatus('warning');

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-status-warning');
    });

    it('info', () => {
      renderWithStatus('info');

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-status-info');
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

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-bar-solid');
    });

    it('solid', () => {
      renderWithType('solid');

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-bar-solid');
    });

    it('striped', () => {
      renderWithType('striped');

      expect(React.findDOMNode(statusBar)).toHaveClass('rs-bar-striped');
    });
  });

  describe('size', () => {
    const renderWithSize = (size) => {
      progressBar = TestUtils.renderIntoDocument(<ProgressBar size={size} />);
    };

    it('defaults to no size', () => {
      expect(React.findDOMNode(progressBar).className).toBe('rs-progress');
    });

    it('xsmall', () => {
      renderWithSize('xsmall');

      expect(React.findDOMNode(progressBar)).toHaveClass('rs-progress-xsmall');
    });

    it('small', () => {
      renderWithSize('small');

      expect(React.findDOMNode(progressBar)).toHaveClass('rs-progress-small');
    });

    it('medium', () => {
      renderWithSize('medium');

      expect(React.findDOMNode(progressBar)).toHaveClass('rs-progress-medium');
    });

    it('large', () => {
      renderWithSize('large');

      expect(React.findDOMNode(progressBar)).toHaveClass('rs-progress-large');
    });

    it('xlarge', () => {
      renderWithSize('xlarge');

      expect(React.findDOMNode(progressBar)).toHaveClass('rs-progress-xlarge');
    });
  });
});
