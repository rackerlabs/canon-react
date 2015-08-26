import PopoverOverlay from '../transpiled/PopoverOverlay';

import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('PopoverOverlay', () => {
  let popover;

  const renderPopover = (placement) => {
    popover = TestUtils.renderIntoDocument(
      <PopoverOverlay className='test-class' placement={placement}>
        Hello
      </PopoverOverlay>
    );
  };

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(popover).parentNode);
  });

  it('renders a popover with the provided class', () => {
    renderPopover('right');

    expect(React.findDOMNode(popover)).toHaveClass('test-class');
  });

  it('adds the specified classes to the popover', () => {
    renderPopover('right');

    expect(React.findDOMNode(popover)).toHaveClass('test-class');
  });

  it('renders children', () => {
    let popoverContent;

    renderPopover('right');
    popoverContent = TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-content');

    expect(React.findDOMNode(popoverContent).textContent).toBe('Hello');
  });

  describe('arrow placement', () => {

    function arrow() {
      return TestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-arrow').getDOMNode();
    }

    it('right', () => {
      renderPopover('right');

      expect(arrow()).toHaveClass('rs-popover-arrow-left-top');
    });

    it('bottom right', () => {
      renderPopover('bottom-right');

      expect(arrow()).toHaveClass('rs-popover-arrow-top-left');
    });

    it('left', () => {
      renderPopover('left');

      expect(arrow()).toHaveClass('rs-popover-arrow-right-top');
    });

    it('bottom left', () => {
      renderPopover('bottom-left');

      expect(arrow()).toHaveClass('rs-popover-arrow-top-right');
    });

    it('is not rendered with center placement', () => {
      renderPopover('center');

      expect(TestUtils.scryRenderedDOMComponentsWithClass(popover, 'rs-popover-arrow').length).toBe(0);
    });
  });
});
