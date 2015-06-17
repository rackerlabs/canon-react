var PopoverBody = require('../transpiled/PopoverBody');

var TestUtils = React.addons.TestUtils;

describe('PopoverBody', function () {
  var popoverBody;

  beforeEach(function () {
    popoverBody = TestUtils.renderIntoDocument(
      <PopoverBody>
        Hello
      </PopoverBody>
    );
  });

  it('renders a popover body', function () {
    expect(popoverBody.getDOMNode()).toHaveClass('rs-popover-body');
  });

  it('renders children', function () {
    expect(popoverBody.getDOMNode().textContent).toBe('Hello');
  });
});
