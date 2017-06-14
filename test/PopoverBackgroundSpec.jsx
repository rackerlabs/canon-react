import PopoverBackground from '../transpiled/PopoverBackground';

import React from 'react';
import { shallow } from 'enzyme';

describe('PopoverBackground', () => {
  let requestClose;

  beforeEach(() => {
    requestClose = jasmine.createSpy('requestClose');
  });

  it('renders over the entire page to block events from other elements', () => {
    const popoverBackground = shallow(<PopoverBackground onRequestClose={ requestClose } />);
    const backgroundStyle = popoverBackground.prop('style');

    expect(backgroundStyle.position).toEqual('fixed');
    expect(backgroundStyle.left).toEqual(0);
    expect(backgroundStyle.top).toEqual(0);
    expect(backgroundStyle.width).toEqual('100%');
    expect(backgroundStyle.height).toEqual('100%');
    expect(backgroundStyle.zIndex).toEqual(999);
    expect(backgroundStyle.backgroundColor).toBe(undefined);
  });

  it('passes the request close callback', () => {
    const popoverBackground = shallow(<PopoverBackground onRequestClose={ requestClose } />);

    expect(popoverBackground.prop('onClick')).toBe(requestClose);
  });

  it('has a background color when isModal is true', () => {
    const popoverBackground = shallow(<PopoverBackground onRequestClose={ requestClose } isModal />);
    const backgroundStyle = popoverBackground.prop('style');

    expect(backgroundStyle.backgroundColor).toEqual('rgba(0, 0, 0, 0.5)');
  });
});
