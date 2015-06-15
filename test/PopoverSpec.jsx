var Popover = require('../transpiled/Popover');
var TestUtils = React.addons.TestUtils;

describe('Popover', function () {
  var popover;

  beforeEach(function () {
    popover = TestUtils.renderIntoDocument(
      <Popover>
        Hello
      </Popover>
    );
  });

  it('renders a popover', function () {
    expect(popover.getDOMNode()).toHaveClass('rs-popover');
  });

  it('renders children', function () {
    var popoverBody;

    popoverBody = TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-body');

    expect(popoverBody.getDOMNode().textContent).toBe('Hello');
  });
});
