var ProgressBar = require('../transpiled/ProgressBar');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('ProgressBar', function () {
  var progressBar;

  beforeEach(function () {
    progressBar = TestUtils.renderIntoDocument(
      <ProgressBar/>
    );
  });

  afterEach(function () {
    if (progressBar.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(progressBar).parentNode);
    }
  });

  it('renders the progress container', function () {
    expect(TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-progress')).not.toBeNull();
  });

  it('renders the inner progress container', function () {
    expect(TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-progress-inner')).not.toBeNull();
  });

  it('defaults to 0 progress', function () {
    var progressSegment;

    progressSegment = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-segment');

    expect(progressSegment.props.style).toEqual({ 'width': '0%' });
  });

  it('renders the segment with the given progress', function () {
    var progressSegment;

    progressBar = TestUtils.renderIntoDocument(
      <ProgressBar progress={50} />
    );
    progressSegment = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-segment');

    expect(progressSegment.props.style).toEqual({ 'width': '50%' });
  });

  describe('status bar', function () {
    var statusBar;

    function renderWithStatus(status) {
      progressBar = TestUtils.renderIntoDocument(<ProgressBar status={status} />);
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');
    }

    it('defaults to ok status', function () {
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');

      expect(statusBar.getDOMNode()).toHaveClass('rs-status-ok');
    });

    it('ok', function () {
      renderWithStatus('ok');

      expect(statusBar.getDOMNode()).toHaveClass('rs-status-ok');
    });

    it('error', function () {
      renderWithStatus('error');

      expect(statusBar.getDOMNode()).toHaveClass('rs-status-error');
    });

    it('warning', function () {
      renderWithStatus('warning');

      expect(statusBar.getDOMNode()).toHaveClass('rs-status-warning');
    });

    it('info', function () {
      renderWithStatus('info');

      expect(statusBar.getDOMNode()).toHaveClass('rs-status-info');
    });
  });

  describe('type', function () {
    var statusBar;

    function renderWithType(type) {
      progressBar = TestUtils.renderIntoDocument(<ProgressBar type={type} />);
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');
    }

    it('defaults to solid', function () {
      statusBar = TestUtils.findRenderedDOMComponentWithClass(progressBar, 'rs-bar');

      expect(statusBar.getDOMNode()).toHaveClass('rs-bar-solid');
    });

    it('solid', function () {
      renderWithType('solid');

      expect(statusBar.getDOMNode()).toHaveClass('rs-bar-solid');
    });

    it('striped', function () {
      renderWithType('striped');

      expect(statusBar.getDOMNode()).toHaveClass('rs-bar-striped');
    });
  });

  describe('size', function () {
    function renderWithSize(size) {
      progressBar = TestUtils.renderIntoDocument(<ProgressBar size={size} />);
    }

    it('defaults to no size', function () {
      expect(progressBar.getDOMNode().className).toBe('rs-progress');
    });

    it('xsmall', function () {
      renderWithSize('xsmall');

      expect(progressBar.getDOMNode()).toHaveClass('rs-progress-xsmall');
    });

    it('small', function () {
      renderWithSize('small');

      expect(progressBar.getDOMNode()).toHaveClass('rs-progress-small');
    });

    it('medium', function () {
      renderWithSize('medium');

      expect(progressBar.getDOMNode()).toHaveClass('rs-progress-medium');
    });

    it('large', function () {
      renderWithSize('large');

      expect(progressBar.getDOMNode()).toHaveClass('rs-progress-large');
    });

    it('xlarge', function () {
      renderWithSize('xlarge');

      expect(progressBar.getDOMNode()).toHaveClass('rs-progress-xlarge');
    });
  });
});
