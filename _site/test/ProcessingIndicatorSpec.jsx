var ProcessingIndicator = require('../transpiled/ProcessingIndicator');
var TestUtils = React.addons.TestUtils;

describe('ProcessingIndicator', function () {
  var processingIndicator;

  beforeEach(function () {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator></ProcessingIndicator>
    );
  });

  it('has the rs-processing-indicator class', function () {
    expect(processingIndicator.getDOMNode()).toHaveClass('rs-processing-indicator');
  });

  it('renders an icon tag', function () {
    expect(TestUtils.findRenderedDOMComponentWithTag(processingIndicator, 'i')).not.toBeNull();
  });

  it('is hidden by default', function () {
    expect(processingIndicator.getDOMNode()).toHaveClass('rs-hidden');
  });

  it('is not hidden when hidden is false', function () {
    processingIndicator = TestUtils.renderIntoDocument(
      <ProcessingIndicator hidden={false}/>
    );

    expect(processingIndicator.getDOMNode()).not.toHaveClass('rs-hidden');
  });
});
