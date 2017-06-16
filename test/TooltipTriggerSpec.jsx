import React from 'react';
import ReactDOM from 'react-dom';
import TooltipTrigger from '../transpiled/TooltipTrigger';
import ReactTestUtils from 'react-dom/test-utils';

describe('TooltipTrigger', () => {
  let trigger, tether, triggerParent, onShowSpy;

  onShowSpy = jasmine.createSpy('onShow');
  const renderTrigger = (placement = 'bottom-right', onShow = onShowSpy) => {
    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(TooltipTrigger.prototype, '_createTether').and.returnValue(tether);

    trigger = ReactTestUtils.renderIntoDocument(
      <TooltipTrigger placement={placement} content={'The tooltip content'} onShow={onShow}>
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

    target = ReactTestUtils.findRenderedDOMComponentWithTag(trigger, 'span');

    expect(target).not.toBeNull();
  });

  it('can render without problem if no onShow prop is provided', () => {
    let tooltip, target;

    renderTrigger('bottom-right', null);

    target = ReactTestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    ReactTestUtils.Simulate.mouseOver(target);
    jasmine.clock().tick(250);
    tooltip = document.getElementsByClassName('rs-tooltip')[0];

    expect(tooltip).toHaveClass('visible');
  });

  describe('trigger behavior', () => {
    var tooltip, target, tooltipContent;

    beforeEach(() => {
      renderTrigger();

      target = ReactTestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
      tooltip = document.getElementsByClassName('rs-tooltip')[0];
    });

    it('shows the tooltip when hovering over the target', () => {
      ReactTestUtils.Simulate.mouseOver(target);

      jasmine.clock().tick(250);

      expect(tooltip).toHaveClass('visible');
    });

    it('hides the tooltip when leaving the target', () => {
      ReactTestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      ReactTestUtils.SimulateNative.mouseOut(target);
      jasmine.clock().tick(250);

      expect(tooltip).not.toHaveClass('visible');
    });

    it('shows the tooltip focusing on the target', () => {
      ReactTestUtils.Simulate.focus(target);

      jasmine.clock().tick(250);

      expect(tooltip).toHaveClass('visible');
    });

    it('fires the onShow prop when the tooltip is shown', () => {
      ReactTestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      expect(onShowSpy).toHaveBeenCalledWith();
    });

    it('hides the tooltip on blur of the target', () => {
      ReactTestUtils.Simulate.focus(target);
      jasmine.clock().tick(250);

      ReactTestUtils.SimulateNative.blur(target);
      jasmine.clock().tick(250);

      expect(tooltip).not.toHaveClass('visible');
    });

    it('shows the tooltip when hovering over the tooltip', () => {
      ReactTestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];
      ReactTestUtils.Simulate.mouseOver(tooltipContent);
      ReactTestUtils.SimulateNative.mouseOut(target);
      jasmine.clock().tick(250);

      expect(tooltip).toHaveClass('visible');
    });

    it('hides the tooltip when leaving the tooltip', () => {
      ReactTestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];

      ReactTestUtils.SimulateNative.mouseOut(target);
      ReactTestUtils.Simulate.mouseOver(tooltipContent);
      jasmine.clock().tick(250);

      ReactTestUtils.SimulateNative.mouseOut(tooltipContent);
      jasmine.clock().tick(260);

      expect(tooltip).not.toHaveClass('visible');
    });

    it('shows the tooltip when re-entering the tooltip before delay', () => {
      ReactTestUtils.Simulate.mouseOver(target);
      jasmine.clock().tick(250);

      tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];

      ReactTestUtils.SimulateNative.mouseOut(target);
      ReactTestUtils.Simulate.mouseOver(tooltipContent);
      jasmine.clock().tick(250);

      ReactTestUtils.SimulateNative.mouseOut(tooltipContent);
      ReactTestUtils.Simulate.mouseOver(tooltipContent);
      jasmine.clock().tick(260);

      expect(tooltip).toHaveClass('visible');
    });
  });

  describe('placement', () => {
    var target;

    const renderTriggerAndHover = (placement) => {
      renderTrigger(placement);
      target = ReactTestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
      ReactTestUtils.Simulate.mouseOver(target);
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
    target = ReactTestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    ReactTestUtils.Simulate.mouseOver(target);
    jasmine.clock().tick(250);

    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(trigger).parentNode);

    expect(tether.destroy).toHaveBeenCalled();
    expect(trigger._tether).toBeNull();
    expect(trigger._tooltipNode).toBeNull();
    expect(document.body.getElementsByClassName('rs-tooltip').length).toEqual(0);
  });
});
