import DetailItemKey from '../transpiled/DetailItemKey';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DetailItemKey', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <DetailItemKey { ...props }>
        Test Detail Item Key
      </DetailItemKey>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('renders provided class name correctly', () => {
    renderWithProps({ id: 'detail-item-key-id', className: 'test-detail-item-key-class' });
    const detailItemKey = renderer.getRenderOutput();

    expect(detailItemKey.props.className).toEqual('rs-detail-key test-detail-item-key-class');
  });

  it('has only default classs when custom class not provided', () => {
    renderWithProps({ id: 'detail-item-key-id' });
    const detailItemKey = renderer.getRenderOutput();

    expect(detailItemKey.props.className).toEqual('rs-detail-key');
  });

  it('has correct id when passed in as prop', () => {
    renderWithProps({ id: 'detail-item-key-id', className: 'test-detail-item-key-class' });
    const detailItemKey = renderer.getRenderOutput();

    expect(detailItemKey.props.id).toEqual('detail-item-key-id');
  });

  it('renders passed in children', () => {
    renderWithProps({ id: 'detail-item-key-id', className: 'test-detail-item-key-class' });
    const detailItemKey = renderer.getRenderOutput();

    expect(detailItemKey.props.children).toEqual('Test Detail Item Key');
  });
});
