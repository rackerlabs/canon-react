import DetailItemKey from '../transpiled/DetailItemKey';
import React from 'react';
import { shallow } from 'enzyme';

describe('DetailItemKey', () => {
  const renderWithProps = (props) => {
    return shallow(
      <DetailItemKey { ...props }>
        Test Detail Item Key
      </DetailItemKey>
    );
  };

  it('renders provided class name correctly', () => {
    const detailItemKey = renderWithProps({ id: 'detail-item-key-id', className: 'test-detail-item-key-class' });

    expect(detailItemKey.hasClass('rs-detail-key test-detail-item-key-class')).toBe(true);
  });

  it('has only default classs when custom class not provided', () => {
    const detailItemKey = renderWithProps({ id: 'detail-item-key-id' });

    expect(detailItemKey.hasClass('rs-detail-key')).toBe(true);
  });

  it('has correct id when passed in as prop', () => {
    const detailItemKey = renderWithProps({ id: 'detail-item-key-id', className: 'test-detail-item-key-class' });

    expect(detailItemKey.prop('id')).toEqual('detail-item-key-id');
  });

  it('renders passed in children', () => {
    const detailItemKey = renderWithProps({ id: 'detail-item-key-id', className: 'test-detail-item-key-class' });

    expect(detailItemKey.prop('children')).toEqual('Test Detail Item Key');
  });
});
