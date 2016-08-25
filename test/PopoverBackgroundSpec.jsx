import PopoverBackground from '../transpiled/PopoverBackground';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('PopoverBackground', () => {
  let renderer, requestClose;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    requestClose = jasmine.createSpy('requestClose');
  });

  it('renders over the entire page to block events from other elements', () => {
    renderer.render(<PopoverBackground onRequestClose={ requestClose } />);
    const popoverBackground = renderer.getRenderOutput();
    const backgroundStyle = popoverBackground.props.style;

    expect(backgroundStyle.position).toEqual('fixed');
    expect(backgroundStyle.left).toEqual(0);
    expect(backgroundStyle.top).toEqual(0);
    expect(backgroundStyle.width).toEqual('100%');
    expect(backgroundStyle.height).toEqual('100%');
    expect(backgroundStyle.zIndex).toEqual(999);
    expect(backgroundStyle.backgroundColor).toBe(undefined);
  });

  it('passes the request close callback', () => {
    renderer.render(<PopoverBackground onRequestClose={ requestClose } />);
    const popoverBackground = renderer.getRenderOutput();

    expect(popoverBackground.props.onClick).toBe(requestClose);
  });

  it('has a background color when isModal is true', () => {
    renderer.render(<PopoverBackground onRequestClose={ requestClose } isModal />);
    const popoverBackground = renderer.getRenderOutput();
    const backgroundStyle = popoverBackground.props.style;

    expect(backgroundStyle.backgroundColor).toEqual('rgba(0, 0, 0, 0.5)');
  });
});
