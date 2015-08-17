var StatusIndicator = require('../transpiled/StatusIndicator');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('StatusIndicator', function () {
  var statusIndicator;

  beforeEach(function () {
    statusIndicator = TestUtils.renderIntoDocument(
      <StatusIndicator id='statusindicator-id' className='test-statusindicator-class'>Status Indicator Text</StatusIndicator>
    );
  });

  it('creates the default statusindicator', function () {
    expect(statusIndicator.props.hidden).toBe(false);
    expect(statusIndicator.getDOMNode()).toHaveClass('ok');
  });

  it('renders a statusindicator', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(statusIndicator, 'statusindicator')).not.toBeNull();
  });

  it('keeps the passed in classes', function () {
    expect(statusIndicator.getDOMNode()).toHaveClass('test-statusindicator-class');
  });

  it('keeps all passed in properties', function () {
    expect(statusIndicator.getDOMNode().id).toBe('statusindicator-id');
  });

  it('renders the text of the statusindicator', function () {
    expect(statusIndicator.getDOMNode().textContent).toBe('Status Indicator Text');
  });

  it('is not hidden when hidden is false', function () {
    expect(statusIndicator.getDOMNode()).not.toHaveClass('rs-hidden');
  });

  it('is hidden when hidden is true', function () {
    statusIndicator = TestUtils.renderIntoDocument(
      <StatusIndicator hidden={true}>StatusIndicator Text</StatusIndicator>
    );

    expect(statusIndicator.getDOMNode()).toHaveClass('rs-hidden');
  });

  describe('statusindicator types', function (){
    it('ok', function () {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='ok'>StatusIndicator Text</StatusIndicator>
      );

      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status');
      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status-ok');
    });

    it('processing', function () {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='processing'>StatusIndicator Text</StatusIndicator>
      );

      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status');
      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status-processing');
    });

    it('warning', function () {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='warning'>StatusIndicator Text</StatusIndicator>
      );

      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status');
      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status-warning');
    });

    it('error', function () {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='error'>StatusIndicator Text</StatusIndicator>
      );

      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status');
      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status-error');
    });

    it('disabled', function () {
      statusIndicator = TestUtils.renderIntoDocument(
        <StatusIndicator status='disabled'>StatusIndicator Text</StatusIndicator>
      );

      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status');
      expect(statusIndicator.getDOMNode()).toHaveClass('rs-status-disabled');
    });
  });
});
