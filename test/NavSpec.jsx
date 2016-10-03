import Nav from '../transpiled/Nav';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Nav', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <Nav { ...props }>
        Test Content
      </Nav>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('sets rs-nav class', () => {
    renderWithProps({});
    const nav = renderer.getRenderOutput();

    expect(nav.props.className).toEqual('rs-nav');
  });

  it('sets rs-pull-right class', () => {
    renderWithProps({ pull: 'right' });
    const nav = renderer.getRenderOutput();

    expect(nav.props.className).toEqual('rs-nav rs-pull-right');
  });
});
