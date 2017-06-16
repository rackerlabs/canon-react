import DetailItem from '../transpiled/DetailItem';
import React from 'react';
import { shallow } from 'enzyme';

describe('DetailItem', () => {
  const renderWithProps = (props) => {
    return shallow(
      <DetailItem { ...props }>
        Test Detail Item
      </DetailItem>
    );
  };

  it('renders provided class name correctly', () => {
    const detailItem = renderWithProps({ id: 'detail-item-id', className: 'test-detail-item-class' });

    expect(detailItem.hasClass('rs-detail-item test-detail-item-class')).toBe(true);
  });

  it('has only default classs when custom class not provided', () => {
    const detailItem = renderWithProps({ id: 'detail-item-id' });

    expect(detailItem.hasClass('rs-detail-item')).toBe(true);
  });

  it('has correct id when passed in as prop', () => {
    const detailItem = renderWithProps({ id: 'detail-item-id', className: 'test-detail-item-class' });

    expect(detailItem.prop('id')).toEqual('detail-item-id');
  });

  it('renders passed in children', () => {
    const detailItem = renderWithProps({ id: 'detail-item-id', className: 'test-detail-item-class' });

    expect(detailItem.prop('children')).toEqual('Test Detail Item');
  });
});
