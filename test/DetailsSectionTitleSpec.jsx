import DetailsSectionTitle from '../transpiled/DetailsSectionTitle';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DetailsSectionTitle', () => {
  let renderer;

  const renderWithProps = (props) => {
    renderer.render(
      <DetailsSectionTitle { ...props }>
        Test Detail Section Title
      </DetailsSectionTitle>
    );
  };

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });

  it('renders only default class name if none is provided', () => {
    renderWithProps({});
    const detailsSectionTitle = renderer.getRenderOutput();

    expect(detailsSectionTitle.props.className).toEqual('rs-detail-section-title');
  });

  it('renders correct children passed in', () => {
    renderWithProps({});
    const detailsSectionTitle = renderer.getRenderOutput();

    expect(detailsSectionTitle.props.children).toEqual('Test Detail Section Title');
  });

  it('renders passed in className', () => {
    renderWithProps({ className: 'test' });
    const detailsSectionTitle = renderer.getRenderOutput();

    expect(detailsSectionTitle.props.className).toEqual('rs-detail-section-title test');
  });
});
