import DetailItem from '../transpiled/DetailItem';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DetailItem', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <DetailItem { ...props }>
        Test Detail Item
      </DetailItem>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('renders provided class name correctly', () => {
    renderWithProps({ id: 'detail-item-id', className: 'test-detail-item-class' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.className).toEqual('rs-detail-item test-detail-item-class');
  });

  it('has only default classs when custom class not provided', () => {
    renderWithProps({ id: 'detail-item-id' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.className).toEqual('rs-detail-item');
  });

  it('has correct id when passed in as prop', () => {
    renderWithProps({ id: 'detail-item-id', className: 'test-detail-item-class' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.id).toEqual('detail-item-id');
  });

  it('renders passed in children', () => {
    renderWithProps({ id: 'detail-item-id', className: 'test-detail-item-class' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.children).toEqual('Test Detail Item');
  });
});
