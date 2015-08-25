var Popover = require('../transpiled/Popover');

var Popover = require('../transpiled/Popover');
var PopoverOverlay = require('../transpiled/PopoverOverlay');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Popover', function () {
  var popover, tether, requestCloseCallback;

  function renderPopover(placement, isOpen, useTargetCallback, offset) {
    var target;

    setFixtures('<div id="content"><div id="some-element-id">The Target</div><div id="container"></div></div>');

    requestCloseCallback = jasmine.createSpy('requestCloseCallback');
    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(Popover.prototype.__reactAutoBindMap, '_createTether').andReturn(tether);

    if (useTargetCallback) {
      target = function () { return document.getElementById('some-element-id'); };
    } else {
      target = 'some-element-id';
    }

    popover = React.render(
      <Popover placement={placement} isOpen={isOpen} onRequestClose={requestCloseCallback} target={target} offset={offset}>
        <PopoverOverlay>
          This is the popover content
        </PopoverOverlay>
      </Popover>,
      document.getElementById('container')
    );
  }

  afterEach(function () {
    if (popover.isMounted()) {
      React.unmountComponentAtNode(document.getElementById('container'));
    }
    jasmine.getFixtures().cleanUp();
  });

  it('does not display the popover', function () {
    renderPopover('right', false);

    expect(popover._popoverNode).toEqual(null);
  });

  it('renders the popover overlay', function () {
    var popoverContainer;

    renderPopover('right', true);
    
    popoverContainer = document.querySelector('.rs-popover');

    expect(popoverContainer).not.toBeNull();
    expect(popover._popoverNode).not.toBeNull();
    expect(popover._popoverNode.props.placement).toBe('right');
  });

  describe('placement', function () {
    it('to the right of the target', function () {
      renderPopover('right', true);

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top left',
        targetAttachment: 'middle right',
        offset: '38px -20px'
      });
    });

    it('to the bottom right of the target', function () {
      renderPopover('bottom-right', true);

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top left',
        targetAttachment: 'bottom right',
        offset: '-20px 45px'
      });
    });

    it('to the left of the target', function () {
      renderPopover('left', true);

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'middle left',
        offset: '38px 20px'
      });
    });

    it('to the bottom left of the target', function () {
      renderPopover('bottom-left', true);

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '-20px -45px'
      });
    });

    it('renders with a target function', function () {
      renderPopover('bottom-left', true, true);

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '-20px -45px'
      });
    });

    it('can override the offsets', function () {
      renderPopover('bottom-left', true, false, '10px 10px');

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '10px 10px'
      });
    });

    it('on the center of the target', function () {
      renderPopover('center', true);

      expect(Popover.prototype.__reactAutoBindMap._createTether).toHaveBeenCalledWith({
        element: React.findDOMNode(popover._containerDiv),
        target: React.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'middle center',
        targetAttachment: 'middle center',
        targetModifier: 'visible'
      });
    });
  });

  describe('notifies parent of close request', function () {
    it('when pressing escape', function() {
      var keyUpEvent;

      renderPopover('right', true);

      keyUpEvent = document.createEvent('CustomEvent');
      keyUpEvent.initEvent('keyup', true, true);
      keyUpEvent.keyCode = 27;
      document.dispatchEvent(keyUpEvent);

      expect(requestCloseCallback).toHaveBeenCalled();
    });

    it('when clicking outside of the popover', function() {
      renderPopover('right', true);

      TestUtils.Simulate.click(document.getElementsByClassName('rs-popover-background-overlay')[0]);

      expect(requestCloseCallback).toHaveBeenCalled();
    });
  });

  it('cleans up when the component is unmounted', function () {
    renderPopover('right', true);

    React.unmountComponentAtNode(React.findDOMNode(document.getElementById('container')));

    expect(tether.destroy).toHaveBeenCalled();
    expect(popover._tether).toBeNull();
    expect(popover._popoverNode).toBeNull();
    expect(document.body.getElementsByClassName('rs-popover').length).toEqual(0);
  });
});
