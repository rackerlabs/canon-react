var PopoverTrigger = require('../transpiled/PopoverTrigger');

var Button = require('../transpiled/Button');
var Popover = require('../transpiled/Popover');

var TestUtils = React.addons.TestUtils;

describe('PopoverTrigger', function () {
  var popoverTrigger, tether;

  function renderPopover(placement) {
    popoverTrigger = TestUtils.renderIntoDocument(
      <PopoverTrigger placement={placement} popover={<Popover>Content</Popover>}>
        <Button>Hello</Button>
      </PopoverTrigger>
    );

    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(popoverTrigger, '_createTether').andReturn(tether);
  }

  it('renders the passed in trigger', function () {
    var button;

    renderPopover('right');

    button = TestUtils.findRenderedComponentWithType(popoverTrigger, Button);

    expect(button.getDOMNode().textContent).toBe('Hello');
  });

  it('does not display the popover initially', function () {
    renderPopover('right');

    expect(popoverTrigger._popoverNode).toBeUndefined();
  });

  describe('trigger click', function () {
    var button;

    function clickTrigger () {
      button = TestUtils.findRenderedComponentWithType(popoverTrigger, Button);
      TestUtils.Simulate.click(button.getDOMNode());
    }

    it('renders the popover', function () {
      var popoverContainer;

      renderPopover('right');
      clickTrigger();
      
      popoverContainer = document.querySelector('.popover-container');

      expect(popoverContainer).not.toBeNull();
      expect(popoverTrigger._popoverNode).not.toBeNull();
    });

    it('renders the popover to the right of the trigger', function () {
      renderPopover('right');
      clickTrigger();

      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'middle left',
        targetAttachment: 'middle right',
        targetOffset: '-150% 50%'
      });
    });

    it('renders the popover to the bottom right of the trigger', function () {
      renderPopover('bottom-right');
      clickTrigger();

      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'top left',
        targetAttachment: 'bottom right',
        targetOffset: '20px -50%'
      });
    });

    it('renders the popover to the left of the trigger', function () {
      var popoverWidth;

      renderPopover('left');
      clickTrigger();

      popoverWidth = React.findDOMNode(popoverTrigger._popoverNode).offsetWidth + 20;
      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'middle left',
        targetAttachment: 'middle right',
        offset: '0 ' + popoverWidth + 'px',
        targetOffset: '-150% -100%'
      });
    });

    it('renders the popover to the bottom left of the trigger', function () {
      var popoverWidth;

      renderPopover('bottom-left');
      clickTrigger();

      popoverWidth = React.findDOMNode(popoverTrigger._popoverNode).offsetWidth - 45;
      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'top left',
        targetAttachment: 'bottom right',
        offset: '-20px ' + popoverWidth + 'px',
        targetOffset: '0 -100%'
      });
    });

    it('hides the popover when the trigger is clicked again', function() {
      renderPopover('right');
      clickTrigger();

      TestUtils.Simulate.click(button.getDOMNode());

      expect(tether.destroy).toHaveBeenCalled();
      expect(popoverTrigger._popoverNode).toBeNull();
    });
  });
});
