import Popover from '../transpiled/Popover';
import PopoverOverlay from '../transpiled/PopoverOverlay';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Popover', () => {
  let popover, tether, requestCloseCallback, closeCallBackCalled;

  const renderPopover = (placement, isOpen, useTargetCallback, offset, isModal) => {
    let target;

    setFixtures('<div id="content"><div id="some-element-id">The Target</div><div id="container"></div></div>');

    requestCloseCallback = (e) => {
      closeCallBackCalled = true;
      return e;
    };
    tether = jasmine.createSpyObj('tether', ['destroy', 'position']);
    spyOn(Popover.prototype, '_createTether').and.returnValue(tether);

    if (useTargetCallback) {
      target = () => document.getElementById('some-element-id');
    } else {
      target = 'some-element-id';
    }

    popover = ReactDOM.render(
      <Popover
        placement={placement}
        isOpen={isOpen}
        onRequestClose={requestCloseCallback}
        target={target}
        offset={offset}
        isModal={isModal}>
        <PopoverOverlay>
          This is the popover content
        </PopoverOverlay>
      </Popover>,
      document.getElementById('container')
    );
  };

  beforeEach(() => {
    closeCallBackCalled = false;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    jasmine.getFixtures().cleanUp();
  });

  it('does not display the popover', () => {
    renderPopover('right', false);

    expect(popover._popoverNode).toEqual(undefined);
  });

  it('repositions the tether', () => {
    renderPopover('right', true);

    expect(tether.position).toHaveBeenCalled();
  });

  it('renders the popover overlay', () => {
    let popoverContainer;

    renderPopover('right', true);

    popoverContainer = document.querySelector('.rs-popover');

    expect(popoverContainer).not.toBeNull();
    expect(popover._popoverNode).not.toBeNull();
    expect(popover._popoverNode.props.placement).toBe('right');
  });

  describe('placement', () => {
    it('to the right of the target', () => {
      renderPopover('right', true);

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top left',
        targetAttachment: 'middle right',
        offset: '38px -20px'
      });
    });

    it('to the bottom right of the target', () => {
      renderPopover('bottom-right', true);

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top left',
        targetAttachment: 'bottom right',
        offset: '-20px 45px'
      });
    });

    it('to the left of the target', () => {
      renderPopover('left', true);

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'middle left',
        offset: '38px 20px'
      });
    });

    it('to the bottom left of the target', () => {
      renderPopover('bottom-left', true);

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '-20px -45px'
      });
    });

    it('renders with a target function', () => {
      renderPopover('bottom-left', true, true);

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '-20px -45px'
      });
    });

    it('can override the offsets', () => {
      renderPopover('bottom-left', true, false, '10px 10px');

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        offset: '10px 10px'
      });
    });

    it('on the center of the target', () => {
      renderPopover('center', true);

      expect(Popover.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(popover._containerDiv),
        target: ReactDOM.findDOMNode(document.getElementById('some-element-id')),
        attachment: 'middle center',
        targetAttachment: 'middle center',
        targetModifier: 'visible'
      });
    });
  });

  describe('notifies parent of close request', () => {
    it('when pressing escape', () => {
      let keyUpEvent;

      renderPopover('right', true);

      keyUpEvent = document.createEvent('CustomEvent');
      keyUpEvent.initEvent('keyup', true, true);
      keyUpEvent.keyCode = 27;
      document.dispatchEvent(keyUpEvent);

      expect(closeCallBackCalled).toBe(true);
    });

    it('when clicking outside of the popover', () => {
      renderPopover('right', true);

      TestUtils.Simulate.click(document.getElementsByClassName('rs-popover-background-overlay')[0]);

      expect(closeCallBackCalled).toBe(true);
    });
  });

  it('cleans up when the component is unmounted', () => {
    renderPopover('right', true);

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(document.getElementById('container')));

    expect(tether.destroy).toHaveBeenCalled();
    expect(popover._tether).toBeNull();
    expect(popover._popoverNode).toBeNull();
    expect(document.body.getElementsByClassName('rs-popover').length).toEqual(0);
  });

  it('renders PopoverBackground with a background color if isModal is true', () => {
    let backgroundStyle;

    renderPopover('center', true, false, '', true);
    backgroundStyle = document.getElementsByClassName('rs-popover-background-overlay')[0].style;

    expect(backgroundStyle['background-color']).not.toEqual('');
  });

  it('renders PopoverBackground with no background color if isModal is false', () => {
    let backgroundStyle;

    renderPopover('center', true, false, '', false);
    backgroundStyle = document.getElementsByClassName('rs-popover-background-overlay')[0].style;

    expect(backgroundStyle['background-color']).toEqual('');
  });
});
