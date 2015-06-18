var PopoverTrigger = require('../transpiled/PopoverTrigger');

var Button = require('../transpiled/Button');
var Popover = require('../transpiled/Popover');

var TestUtils = React.addons.TestUtils;

describe('PopoverTrigger', function () {
  var popoverTrigger, tether;

  beforeEach(function () {
    popoverTrigger = TestUtils.renderIntoDocument(
      <PopoverTrigger popover={<Popover>Content</Popover>}>
        <Button>Hello</Button>
      </PopoverTrigger>
    );

    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(popoverTrigger, '_createTether').andReturn(tether);
  });

  it('renders the passed in trigger', function () {
    var button;

    button = TestUtils.findRenderedComponentWithType(popoverTrigger, Button);

    expect(button.getDOMNode().textContent).toBe('Hello');
  });

  it('does not display the popover initially', function () {
    expect(popoverTrigger._popoverNode).toBeUndefined();
  });

  describe('trigger click', function () {
    var button;

    beforeEach(function () {
      button = TestUtils.findRenderedComponentWithType(popoverTrigger, Button);
      TestUtils.Simulate.click(button.getDOMNode());
    });

    it('renders the popover', function () {
      var popoverContainer;

      popoverContainer = document.querySelector('.popover-container');

      expect(popoverContainer).not.toBeNull();
      expect(popoverTrigger._popoverNode).not.toBeNull();
    });

    it('tethers the popover to the trigger', function () {
      var popoverContainer;

      popoverContainer = document.querySelector('.popover-container');

      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'middle left',
        targetAttachment: 'middle right',
        targetOffset: '-35px 20px'
      });
    });

    it('hides the popover when the trigger is clicked again', function() {
      TestUtils.Simulate.click(button.getDOMNode());

      expect(tether.destroy).toHaveBeenCalled();
      expect(popoverTrigger._popoverNode).toBeNull();
    });
  });
});
