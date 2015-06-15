var Popover = require('../transpiled/Popover');
var TestUtils = React.addons.TestUtils;

describe('Popover', function () {
  var popover;

  function renderPopover(position) {
    popover = TestUtils.renderIntoDocument(
      <Popover position={position}>
        Hello
      </Popover>
    );
  }

  it('renders a popover', function () {
    renderPopover('left-top');

    expect(popover.getDOMNode()).toHaveClass('rs-popover');
  });

  it('renders children', function () {
    var popoverContent;

    renderPopover('left-top');
    popoverContent = TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-content');

    expect(popoverContent.getDOMNode().textContent).toBe('Hello');
  });

  describe('arrow position', function () {

    function arrow() {
      return TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-arrow').getDOMNode();
    }

    it('left top', function () {
      renderPopover('left-top');

      expect(arrow()).toHaveClass('rs-popover-arrow-left-top');
    });

    it('top left', function () {
      renderPopover('top-left');

      expect(arrow()).toHaveClass('rs-popover-arrow-top-left');
    });

    it('right top', function () {
      renderPopover('right-top');

      expect(arrow()).toHaveClass('rs-popover-arrow-right-top');
    });

    it('top right', function () {
      renderPopover('top-right');

      expect(arrow()).toHaveClass('rs-popover-arrow-top-right');
    });
  });
});
