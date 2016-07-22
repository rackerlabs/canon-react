import DetailItemValue from '../transpiled/DetailItemValue';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DetailItemValue', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <DetailItemValue { ...props }>
        Test Detail Item Value
      </DetailItemValue>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('renders provided class name correctly', () => {
    renderWithProps({ id: 'detail-item-value-id', className: 'test-detail-item-value-class' });
    const detailItemValue = renderer.getRenderOutput();

    expect(detailItemValue.props.className).toEqual('rs-detail-value test-detail-item-value-class');
  });

  it('has only default classs when custom class not provided', () => {
    renderWithProps({ id: 'detail-item-value-id' });
    const detailItemValue = renderer.getRenderOutput();

    expect(detailItemValue.props.className).toEqual('rs-detail-value');
  });

  it('has correct id when passed in as prop', () => {
    renderWithProps({ id: 'detail-item-value-id', className: 'test-detail-item-value-class' });
    const detailItemValue = renderer.getRenderOutput();

    expect(detailItemValue.props.id).toEqual('detail-item-value-id');
  });

  it('renders passed in children', () => {
    renderWithProps({ id: 'detail-item-value-id', className: 'test-detail-item-value-class' });
    const detailItemValue = renderer.getRenderOutput();

    expect(detailItemValue.props.children).toEqual('Test Detail Item Value');
  });
});
