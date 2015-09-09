import React from 'react/addons';
import TooltipTrigger from '../transpiled/TooltipTrigger';
let TestUtils = React.addons.TestUtils;

describe('TooltipTrigger', () => {
  let trigger;

  beforeEach(() => {
    trigger = TestUtils.renderIntoDocument(
      <TooltipTrigger content={'The tooltip content'}>
        <span>Tooltip Target</span>
      </TooltipTrigger>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(trigger).parentNode);
  });

  it('renders the target', () => {
    let target;

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');

    expect(target).not.toBeNull();
  });

  it('shows the tooltip when hovering over the target', () => {
    let tooltip, target;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];
    TestUtils.Simulate.mouseOver(target);

    jasmine.Clock.tick(250);

    expect(tooltip).toHaveClass('visible');
  });

  it('hides the tooltip when leaving the target', () => {
    let tooltip, target;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];

    TestUtils.Simulate.mouseOver(target);
    jasmine.Clock.tick(250);

    TestUtils.SimulateNative.mouseOut(target);
    jasmine.Clock.tick(250);

    expect(tooltip).not.toHaveClass('visible');
  });

  it('shows the tooltip focusing on the target', () => {
    let tooltip, target;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];
    TestUtils.Simulate.focus(target);

    jasmine.Clock.tick(250);

    expect(tooltip).toHaveClass('visible');
  });

  it('hides the tooltip on blur of the target', () => {
    let tooltip, target;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];

    TestUtils.Simulate.focus(target);
    jasmine.Clock.tick(250);

    TestUtils.SimulateNative.blur(target);
    jasmine.Clock.tick(250);

    expect(tooltip).not.toHaveClass('visible');
  });

  it('shows the tooltip when hovering over the tooltip', () => {
    let tooltip, target, tooltipContent;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];
    TestUtils.Simulate.mouseOver(target);
    jasmine.Clock.tick(250);

    tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];
    TestUtils.Simulate.mouseOver(tooltipContent);
    TestUtils.SimulateNative.mouseOut(target);
    jasmine.Clock.tick(250);

    expect(tooltip).toHaveClass('visible');
  });

  it('hides the tooltip when leaving the tooltip', () => {
    let tooltip, target, tooltipContent;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];

    TestUtils.Simulate.mouseOver(target);
    jasmine.Clock.tick(250);

    tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];

    TestUtils.SimulateNative.mouseOut(target);
    TestUtils.Simulate.mouseOver(tooltipContent);
    jasmine.Clock.tick(250);

    TestUtils.SimulateNative.mouseOut(tooltipContent);
    jasmine.Clock.tick(260);

    expect(tooltip).not.toHaveClass('visible');
  });

  it('shows the tooltip when re-entering the tooltip before delay', () => {
    let tooltip, target, tooltipContent;

    jasmine.Clock.useMock();

    target = TestUtils.findRenderedDOMComponentWithTag(trigger, 'span');
    tooltip = document.getElementsByClassName('rs-tooltip')[0];

    TestUtils.Simulate.mouseOver(target);
    jasmine.Clock.tick(250);

    tooltipContent = document.getElementsByClassName('rs-tooltip-inner')[0];

    TestUtils.SimulateNative.mouseOut(target);
    TestUtils.Simulate.mouseOver(tooltipContent);
    jasmine.Clock.tick(250);

    TestUtils.SimulateNative.mouseOut(tooltipContent);
    TestUtils.Simulate.mouseOver(tooltipContent);
    jasmine.Clock.tick(260);

    expect(tooltip).toHaveClass('visible');
  });
});
