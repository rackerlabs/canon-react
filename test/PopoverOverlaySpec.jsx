import PopoverOverlay from '../transpiled/PopoverOverlay';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('PopoverOverlay', () => {
  let popover;

  const renderPopover = (placement) => {
    popover = ReactTestUtils.renderIntoDocument(
      <PopoverOverlay className='test-class' placement={placement}>
        Hello
      </PopoverOverlay>
    );
  };

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(popover).parentNode);
  });

  it('renders a popover with the provided class', () => {
    renderPopover('right');

    expect(ReactDOM.findDOMNode(popover)).toHaveClass('test-class');
  });

  it('adds the specified classes to the popover', () => {
    renderPopover('right');

    expect(ReactDOM.findDOMNode(popover)).toHaveClass('test-class');
  });

  it('renders children', () => {
    let popoverContent;

    renderPopover('right');
    popoverContent = ReactTestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-content');

    expect(ReactDOM.findDOMNode(popoverContent).textContent).toBe('Hello');
  });

  describe('arrow placement', () => {

    function arrow() {
      return ReactTestUtils.findRenderedDOMComponentWithClass(popover, 'rs-popover-arrow');
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

      expect(ReactTestUtils.scryRenderedDOMComponentsWithClass(popover, 'rs-popover-arrow').length).toBe(0);
    });
  });
});
