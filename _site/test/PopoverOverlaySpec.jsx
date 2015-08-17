var PopoverOverlay = require('../transpiled/PopoverOverlay');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('PopoverOverlay', function () {
  var popover;

  function renderPopover(placement) {
    popover = TestUtils.renderIntoDocument(
      <PopoverOverlay className='test-class' placement={placement}>
        Hello
      </PopoverOverlay>
    );
  }

  afterEach(function () {
    if (popover.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(popover).parentNode);
    }
  });

  it('renders a popover with the provided class', function () {
    renderPopover('right');

    expect(popover.getDOMNode()).toHaveClass('test-class');
  });

  it('adds the specified classes to the popover', function () {
    renderPopover('right');

    expect(popover.getDOMNode()).toHaveClass('test-class');
  });

  it('renders children', function () {
    var popoverContent;

    renderPopover('right');
    popoverContent = TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-content');

    expect(popoverContent.getDOMNode().textContent).toBe('Hello');
  });

  describe('arrow placement', function () {

    function arrow() {
      return TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-arrow').getDOMNode();
    }

    it('right', function () {
      renderPopover('right');

      expect(arrow()).toHaveClass('rs-popover-arrow-left-top');
    });

    it('bottom right', function () {
      renderPopover('bottom-right');

      expect(arrow()).toHaveClass('rs-popover-arrow-top-left');
    });

    it('left', function () {
      renderPopover('left');

      expect(arrow()).toHaveClass('rs-popover-arrow-right-top');
    });

    it('bottom left', function () {
      renderPopover('bottom-left');

      expect(arrow()).toHaveClass('rs-popover-arrow-top-right');
    });
  });
});
