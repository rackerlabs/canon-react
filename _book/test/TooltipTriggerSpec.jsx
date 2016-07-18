import React from 'react';
import ReactDOM from 'react-dom';
import TooltipTrigger from '../transpiled/TooltipTrigger';
import TestUtils from 'react-addons-test-utils';

describe('TooltipTrigger', () => {
  let trigger, tether, triggerParent;

  const renderTrigger = (placement = 'bottom-right') => {
    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(TooltipTrigger.prototype, '_createTether').and.returnValue(tether);

    trigger = TestUtils.renderIntoDocument(
      <TooltipTrigger placement={placement} content={'The tooltip content'}>
        <span>Tooltip Target</span>
      </TooltipTrigger>
    );
    triggerParent = ReactDOM.findDOMNode(trigger).parentNode;
  };

  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
    ReactDOM.unmountComponentAtNode(triggerParent);
  });

  it('renders the target', () => {
    let target;

    renderTrigger();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');

    expect(target).not.toBeNull();
  });

  describe('trigger behavior', () => {
    var tooltip, target, tooltipContent;

    beforeEach(() => {
      renderTrigger();

      target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
      tooltip = document.getElementsByClassName('rs-tooltip')[0];
    });

    it('shows the tooltip when hovering over the target', () => {
      TestUtils.Simulate.mouseOver(target);

      jasmine.clock().tick(250);

      expect(tooltip).toHaveClass('visible');
    });

    it('hides the tooltip when leaving the target', () => {
      TestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      TestUtils.SimulateNative.mouseOut(target);
      jasmine.clock().tick(250);

      expect(tooltip).not.toHaveClass('visible');
    });

    it('shows the tooltip focusing on the target', () => {
      TestUtils.Simulate.focus(target);

      jasmine.clock().tick(250);

      expect(tooltip).toHaveClass('visible');
    });

    it('hides the tooltip on blur of the target', () => {
      TestUtils.Simulate.focus(target);
      jasmine.clock().tick(250);

      TestUtils.SimulateNative.blur(target);
      jasmine.clock().tick(250);

      expect(tooltip).not.toHaveClass('visible');
    });

    it('shows the tooltip when hovering over the tooltip', () => {
      TestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];
      TestUtils.Simulate.mouseOver(tooltipContent);
      TestUtils.SimulateNative.mouseOut(target);
      jasmine.clock().tick(250);

      expect(tooltip).toHaveClass('visible');
    });

    it('hides the tooltip when leaving the tooltip', () => {
      TestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];

      TestUtils.SimulateNative.mouseOut(target);
      TestUtils.Simulate.mouseOver(tooltipContent);
      jasmine.clock().tick(250);

      TestUtils.SimulateNative.mouseOut(tooltipContent);
      jasmine.clock().tick(260);

      expect(tooltip).not.toHaveClass('visible');
    });

    it('shows the tooltip when re-entering the tooltip before delay', () => {
      TestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];

      TestUtils.SimulateNative.mouseOut(target);
      TestUtils.Simulate.mouseOver(tooltipContent);
      jasmine.clock().tick(250);

      TestUtils.SimulateNative.mouseOut(tooltipContent);
      TestUtils.Simulate.mouseOver(tooltipContent);
      jasmine.clock().tick(260);

      expect(tooltip).toHaveClass('visible');
    });
  });

  describe('placement', () => {
    var target;

    const renderTriggerAndHover = (placement) => {
      renderTrigger(placement);
      target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
      TestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);
    };

    it('left', () => {
      renderTriggerAndHover('left');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'middle right',
        targetAttachment: 'middle left',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('bottom left', () => {
      renderTriggerAndHover('bottom-left');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'top right',
        targetAttachment: 'bottom left',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('top left', () => {
      renderTriggerAndHover('top-left');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'bottom right',
        targetAttachment: 'top left',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('top', () => {
      renderTriggerAndHover('top');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'bottom middle',
        targetAttachment: 'top middle',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('bottom', () => {
      renderTriggerAndHover('bottom');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'top middle',
        targetAttachment: 'bottom middle',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('right', () => {
      renderTriggerAndHover('right');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'middle left',
        targetAttachment: 'middle right',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('top right', () => {
      renderTriggerAndHover('top-right');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'bottom left',
        targetAttachment: 'top right',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('bottom right', () => {
      renderTriggerAndHover('bottom-right');

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'top left',
        targetAttachment: 'bottom right',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });

    it('default is bottom right', () => {
      renderTriggerAndHover();

      expect(TooltipTrigger.prototype._createTether).toHaveBeenCalledWith({
        element: ReactDOM.findDOMNode(document.querySelector('.rs-tooltip')),
        target: ReactDOM.findDOMNode(target),
        attachment: 'top left',
        targetAttachment: 'bottom right',
        targetModifier: 'visible',
        constraints: [
          {to: 'window', pin: true, attachment: 'together'}
        ]
      });
    });
  });

  it('cleans up when the component is unmounted', () => {
    var target;

    renderTrigger();
    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    TestUtils.Simulate.mouseOver(target);
    jasmine.clock().tick(250);

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(trigger).parentNode);

    expect(tether.destroy).toHaveBeenCalled();
    expect(trigger._tether).toBeNull();
    expect(trigger._tooltipNode).toBeNull();
    expect(document.body.getElementsByClassName('rs-tooltip').length).toEqual(0);
  });
});
