import DetailsSectionSubtitle from '../transpiled/DetailsSectionSubtitle';
import React from 'react';
import { shallow } from 'enzyme';

describe('DetailsSectionSubtitle', () => {
  const renderWithProps = (props) => {
    return shallow(
      <DetailsSectionSubtitle { ...props }>
        Test Detail Section Subtitle
      </DetailsSectionSubtitle>
    );
  };

  it('renders only default class name if none is provided', () => {
    const detailsSectionSubtitle = renderWithProps({});

    expect(detailsSectionSubtitle.hasClass('rs-detail-section-subtitle')).toBe(true);
  });

  it('renders correct children passed in', () => {
    const detailsSectionSubtitle = renderWithProps({});

    expect(detailsSectionSubtitle.prop('children')).toEqual('Test Detail Section Subtitle');
  });

  it('renders passed in className', () => {
    const detailsSectionSubtitle = renderWithProps({ className: 'test' });

    expect(detailsSectionSubtitle.hasClass('rs-detail-section-subtitle test')).toBe(true);
  });
});
