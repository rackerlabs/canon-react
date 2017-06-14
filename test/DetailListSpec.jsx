import DetailList from '../transpiled/DetailList';
import React from 'react';
import { shallow } from 'enzyme';

describe('DetailList', () => {
  const renderWithProps = (props) => {
    return shallow(
      <DetailList { ...props }>
        Test Detail List
      </DetailList>
    );
  };
  it('renders provided class name correctly', () => {
    const detailItem = renderWithProps({ id: 'detail-list-id', className: 'test-detail-list-class' });

    expect(detailItem.hasClass('rs-detail-list test-detail-list-class')).toBe(true);
  });

  it('has only default classs when custom class not provided', () => {
    const detailItem = renderWithProps({ id: 'detail-list-id' });

    expect(detailItem.hasClass('rs-detail-list')).toBe(true);
  });

  it('has correct id when passed in as prop', () => {
    const detailItem = renderWithProps({ id: 'detail-list-id', className: 'test-detail-list-class' });

    expect(detailItem.prop('id')).toEqual('detail-list-id');
  });

  it('renders passed in children', () => {
    const detailItem = renderWithProps({ id: 'detail-list-id', className: 'test-detail-list-class' });

    expect(detailItem.prop('children')).toEqual('Test Detail List');
  });
});
