import DetailsSectionSubtitle from '../transpiled/DetailsSectionSubtitle';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailsSectionSubtitle', () => {
  let detailsSectionSubtitle;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailsSectionSubtitle).parentNode);
  });

  it('renders only provided class name correctly', () => {
    detailsSectionSubtitle = TestUtils.renderIntoDocument(
      <DetailsSectionSubtitle>subtitle</DetailsSectionSubtitle>
    );

    expect(ReactDOM.findDOMNode(detailsSectionSubtitle)).toHaveClass('rs-detail-section-subtitle');
    expect(ReactDOM.findDOMNode(detailsSectionSubtitle)).not.toHaveClass('test');
  });

  it('renders correct children passed in', () => {
    let subtitle;
    detailsSectionSubtitle = TestUtils.renderIntoDocument(
      <DetailsSectionSubtitle><span className="test-child">subtitle</span></DetailsSectionSubtitle>
    );

    subtitle = TestUtils.findRenderedDOMComponentWithClass(detailsSectionSubtitle, 'test-child');
    expect(subtitle.textContent).toBe('subtitle');
  });

  it('renders passed in className', () => {
    detailsSectionSubtitle = TestUtils.renderIntoDocument(
      <DetailsSectionSubtitle className="test">Target Child</DetailsSectionSubtitle>
    );

    expect(ReactDOM.findDOMNode(detailsSectionSubtitle)).toHaveClass('rs-detail-section-subtitle test');
  });
});
