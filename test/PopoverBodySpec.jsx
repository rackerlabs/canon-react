var PopoverBody = require('../transpiled/PopoverBody');

var React = require('react/addons');
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

  afterEach(function () {
    if (popoverBody.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(popoverBody).parentNode);
    }
  });

  it('renders a popover body', function () {
    expect(popoverBody.getDOMNode()).toHaveClass('rs-popover-body');
  });

  it('renders children', function () {
    expect(popoverBody.getDOMNode().textContent).toBe('Hello');
  });
});
