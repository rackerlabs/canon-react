import DetailItemValue from '../transpiled/DetailItemValue';
import React from 'react';
import { shallow } from 'enzyme';

describe('DetailItemValue', () => {
  const renderWithProps = (props) => {
    return shallow(
      <DetailItemValue { ...props }>
        Test Detail Item Value
      </DetailItemValue>
    );
  };

  it('renders provided class name correctly', () => {
    const detailItemValue = renderWithProps({ id: 'detail-item-value-id', className: 'test-detail-item-value-class' });

    expect(detailItemValue.hasClass('rs-detail-value test-detail-item-value-class')).toBe(true);
  });

  it('has only default classs when custom class not provided', () => {
    const detailItemValue = renderWithProps({ id: 'detail-item-value-id' });

    expect(detailItemValue.hasClass('rs-detail-value')).toBe(true);
  });

  it('has correct id when passed in as prop', () => {
    const detailItemValue = renderWithProps({ id: 'detail-item-value-id', className: 'test-detail-item-value-class' });

    expect(detailItemValue.prop('id')).toEqual('detail-item-value-id');
  });

  it('renders passed in children', () => {
    const detailItemValue = renderWithProps({ id: 'detail-item-value-id', className: 'test-detail-item-value-class' });

    expect(detailItemValue.prop('children')).toEqual('Test Detail Item Value');
  });
});
