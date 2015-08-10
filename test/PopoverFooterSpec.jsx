var PopoverFooter = require('../transpiled/PopoverFooter');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('PopoverFooter', function () {
  var popoverFooter;

  beforeEach(function () {
    popoverFooter = TestUtils.renderIntoDocument(
      <PopoverFooter>
        Hello
      </PopoverFooter>
    );
  });

  it('renders a footer button group', function () {
    var buttonGroup;

    buttonGroup = TestUtils.findRenderedDOMComponentWithClass(popoverFooter, 'rs-popover-footer');

    expect(buttonGroup.getDOMNode()).toHaveClass('rs-btn-group');
  });

  it('renders children', function () {
    expect(popoverFooter.getDOMNode().textContent).toBe('Hello');
  });
});
