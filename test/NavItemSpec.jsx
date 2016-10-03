import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NavItem from '../transpiled/NavItem';

describe('NavItem', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <NavItem { ...props }>
        Test Content
      </NavItem>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('sets rs-nav-item class', () => {
    renderWithProps({});
    const nav = renderer.getRenderOutput();
    expect(nav.props.className).toEqual('rs-nav-item');
  });

  it('merges classes from props', () => {
    renderWithProps({className: 'rs-dropdown rs-utility-dropdown'});
    const nav = renderer.getRenderOutput();
    expect(nav.props.className).toEqual('rs-nav-item rs-dropdown rs-utility-dropdown');
  });

});
