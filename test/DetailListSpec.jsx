import DetailList from '../transpiled/DetailList';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DetailList', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <DetailList { ...props }>
        Test Detail List
      </DetailList>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('renders provided class name correctly', () => {
    renderWithProps({ id: 'detail-list-id', className: 'test-detail-list-class' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.className).toEqual('rs-detail-list test-detail-list-class');
  });

  it('has only default classs when custom class not provided', () => {
    renderWithProps({ id: 'detail-list-id' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.className).toEqual('rs-detail-list');
  });

  it('has correct id when passed in as prop', () => {
    renderWithProps({ id: 'detail-list-id', className: 'test-detail-list-class' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.id).toEqual('detail-list-id');
  });

  it('renders passed in children', () => {
    renderWithProps({ id: 'detail-list-id', className: 'test-detail-list-class' });
    const detailItem = renderer.getRenderOutput();

    expect(detailItem.props.children).toEqual('Test Detail List');
  });
});
