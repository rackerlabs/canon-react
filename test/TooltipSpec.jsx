import React from 'react/addons';
import Tooltip from '../transpiled/Tooltip';
const TestUtils = React.addons.TestUtils;

describe('Tooltip', () => {
  let tooltip, tether, onMouseOverCallback, onMouseLeaveCallback,
    mouseOverCallbackCalled, mouseLeaveCallbackCalled;

  const renderTooltip = (isOpen) => {
    setFixtures('<div id="content"><div id="some-element-id">The Target</div><div id="container"></div></div>');

    onMouseOverCallback = (e) => {
      mouseOverCallbackCalled = true;
      return e;
    };
    onMouseLeaveCallback = (e) => {
      mouseLeaveCallbackCalled = true;
      return e;
    };
    tether = jasmine.createSpyObj('tether', ['destroy']);
    spyOn(Tooltip.prototype, '_createTether').andReturn(tether);

    const target = () => document.getElementById('some-element-id');

    tooltip = React.render(
      <Tooltip isOpen={isOpen}
       onMouseOver={onMouseOverCallback}
       onMouseLeave={onMouseLeaveCallback}
       target={target}>
          This is the tooltip content
      </Tooltip>,
      document.getElementById('container')
    );
  };

  beforeEach(() => {
    mouseOverCallbackCalled = false;
    mouseLeaveCallbackCalled = false;
  });

  afterEach(() => {
    React.unmountComponentAtNode(document.getElementById('container'));
    jasmine.getFixtures().cleanUp();
  });

  it('does not display the tooltip', () => {
    renderTooltip(false);

    expect(tooltip._tooltipNode).toEqual(null);
  });

  it('renders the tooltip', () => {
    let tooltipContainer;

    renderTooltip(true);

    tooltipContainer = document.querySelector('.rs-tooltip');

    expect(tooltipContainer).not.toBeNull();
    expect(tooltip._tooltipNode).not.toBeNull();
    expect(tooltip._tooltipNode.props.onMouseOver).toBe(onMouseOverCallback);
    expect(tooltip._tooltipNode.props.onMouseOver).toBe(onMouseOverCallback);
  });

  it('positions the tooltip next to the target', () => {
    renderTooltip(true);

    expect(Tooltip.prototype._createTether).toHaveBeenCalledWith({
      element: React.findDOMNode(document.querySelector('.rs-tooltip')),
      target: React.findDOMNode(document.getElementById('some-element-id')),
      attachment: 'top left',
      targetAttachment: 'bottom right',
      targetModifier: 'visible',
      constraints: [
        {to: 'window', pin: true, attachment: 'together'}
      ]
    });
  });

  describe('notifies parent of mouse movements', () => {

    it('when mousing over the tooltip', () => {
      renderTooltip(true);

      TestUtils.Simulate.mouseOver(document.getElementsByClassName('rs-tooltip-inner')[0]);

      expect(mouseOverCallbackCalled).toBe(true);
    });

    it('when mouse leaves the tooltip', () => {
      renderTooltip(true);

      TestUtils.SimulateNative.mouseOut(document.getElementsByClassName('rs-tooltip-inner')[0]);

      expect(mouseLeaveCallbackCalled).toBe(true);
    });
  });

  it('cleans up when the component is unmounted', () => {
    renderTooltip(true);

    React.unmountComponentAtNode(React.findDOMNode(document.getElementById('container')));

    expect(tether.destroy).toHaveBeenCalled();
    expect(tooltip._tether).toBeNull();
    expect(tooltip._tooltipNode).toBeNull();
    expect(document.body.getElementsByClassName('rs-tooltip').length).toEqual(0);
  });
});
