import DetailsSectionTitle from '../transpiled/DetailsSectionTitle';
import React from 'react';
import { shallow } from 'enzyme';

describe('DetailsSectionTitle', () => {
  const renderWithProps = (props) => {
    return shallow(
      <DetailsSectionTitle { ...props }>
        Test Detail Section Title
      </DetailsSectionTitle>
    );
  };

  it('renders only default class name if none is provided', () => {
    const detailsSectionTitle = renderWithProps({});

    expect(detailsSectionTitle.hasClass('rs-detail-section-title')).toBe(true);
  });

  it('renders correct children passed in', () => {
    const detailsSectionTitle = renderWithProps({});

    expect(detailsSectionTitle.prop('children')).toEqual('Test Detail Section Title');
  });

  it('renders passed in className', () => {
    const detailsSectionTitle = renderWithProps({ className: 'test' });

    expect(detailsSectionTitle.hasClass('rs-detail-section-title test')).toBe(true);
  });
});
