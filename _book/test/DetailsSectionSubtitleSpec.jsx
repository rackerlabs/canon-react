import DetailsSectionSubtitle from '../transpiled/DetailsSectionSubtitle';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DetailsSectionSubtitle', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <DetailsSectionSubtitle { ...props }>
        Test Detail Section Subtitle
      </DetailsSectionSubtitle>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('renders only default class name if none is provided', () => {
    renderWithProps({});
    const detailsSectionSubtitle = renderer.getRenderOutput();

    expect(detailsSectionSubtitle.props.className).toEqual('rs-detail-section-subtitle');
  });

  it('renders correct children passed in', () => {
    renderWithProps({});
    const detailsSectionSubtitle = renderer.getRenderOutput();

    expect(detailsSectionSubtitle.props.children).toEqual('Test Detail Section Subtitle');
  });

  it('renders passed in className', () => {
    renderWithProps({ className: 'test' });
    const detailsSectionSubtitle = renderer.getRenderOutput();

    expect(detailsSectionSubtitle.props.className).toEqual('rs-detail-section-subtitle test');
  });
});
