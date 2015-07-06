var PopoverTrigger = require('../transpiled/PopoverTrigger');

var Button = require('../transpiled/Button');
var Popover = require('../transpiled/Popover');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('PopoverTrigger', function () {
  var popoverTrigger, tether;

  function renderPopover(placement) {
    popoverTrigger = TestUtils.renderIntoDocument(
      <PopoverTrigger placement={placement} popover={<Popover><Button onClick={function(){}}>Hello</Button>Content</Popover>}>
        <Button>Hello</Button>
      </PopoverTrigger>
    );

    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(popoverTrigger, '_createTether').andReturn(tether);
  }

  afterEach(function () {
    if (popoverTrigger.isMounted()) {
      React.unmountComponentAtNode(React.findDOMNode(popoverTrigger).parentNode);
    }
  });

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
      
      popoverContainer = document.querySelector('.rs-popover');

      expect(popoverContainer).not.toBeNull();
      expect(popoverTrigger._popoverNode).not.toBeNull();
    });

    it('renders the popover to the right of the trigger', function () {
      renderPopover('right');
      clickTrigger();

      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'top left',
        targetAttachment: 'middle right',
        offset: '38px -20px'
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
        offset: '-20px 45px'
      });
    });

    it('renders the popover to the left of the trigger', function () {
      renderPopover('left');
      clickTrigger();

      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'top right',
        targetAttachment: 'middle left',
        offset: '38px 20px'
      });
    });

    it('renders the popover to the bottom left of the trigger', function () {
      renderPopover('bottom-left');
      clickTrigger();

      expect(popoverTrigger._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popoverTrigger._containerDiv),
        target: React.findDOMNode(popoverTrigger.getDOMNode()),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '-20px -45px'
      });
    });

    it('hides the popover when the trigger is clicked again', function() {
      renderPopover('right');
      clickTrigger();

      TestUtils.Simulate.click(button.getDOMNode());

      expect(tether.destroy).toHaveBeenCalled();
      expect(popoverTrigger._popoverNode).toBeNull();
    });

    it('hides the popover when pressing escape', function() {
      var keyUpEvent;

      renderPopover('right');
      clickTrigger();

      keyUpEvent = document.createEvent('CustomEvent');
      keyUpEvent.initEvent('keyup', true, true);
      keyUpEvent.keyCode = 27;
      document.dispatchEvent(keyUpEvent);

      expect(tether.destroy).toHaveBeenCalled();
      expect(popoverTrigger._popoverNode).toBeNull();
    });

    it('hides the popover when clicking outside of the popover', function() {
      renderPopover('right');
      clickTrigger();

      TestUtils.Simulate.click(React.findDOMNode(popoverTrigger));

      expect(tether.destroy).toHaveBeenCalled();
      expect(popoverTrigger._popoverNode).toBeNull();
    });

    it('does not hide the popover when clicking inside of the popover', function() {
      var popoverButton;

      renderPopover('right');
      clickTrigger();

      popoverButton = TestUtils.findRenderedComponentWithType(popoverTrigger._popoverNode, Button);
      TestUtils.Simulate.click(React.findDOMNode(popoverButton));

      expect(tether.destroy).not.toHaveBeenCalled();
      expect(popoverTrigger._popoverNode).not.toBeNull();
    });

    it('cleans up when the component is unmounted', function () {
      renderPopover('right');
      clickTrigger();

      React.unmountComponentAtNode(React.findDOMNode(popoverTrigger).parentNode);

      expect(tether.destroy).toHaveBeenCalled();
      expect(popoverTrigger._tether).toBeNull();
      expect(popoverTrigger._popoverNode).toBeNull();
      expect(document.body.getElementsByClassName('rs-popover').length).toEqual(0);
    });
  });
});
