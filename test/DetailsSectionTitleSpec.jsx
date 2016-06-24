import DetailsSectionTitle from '../transpiled/DetailsSectionTitle';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailsSectionTitle', () => {
  let detailsSectionTitle;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailsSectionTitle).parentNode);
  });

  it('renders only provided class name correctly', () => {
    detailsSectionTitle = TestUtils.renderIntoDocument(
      <DetailsSectionTitle>
        Test Detail Item
      </DetailsSectionTitle>
    );

    expect(ReactDOM.findDOMNode(detailsSectionTitle)).toHaveClass('rs-detail-section-title');
    expect(ReactDOM.findDOMNode(detailsSectionTitle)).not.toHaveClass('test');
  });

  it('renders correct children passed in', () => {
    let title;
    detailsSectionTitle = TestUtils.renderIntoDocument(
      <DetailsSectionTitle><div className="test-child">title</div></DetailsSectionTitle>
    );

    title = TestUtils.findRenderedDOMComponentWithClass(detailsSectionTitle, 'test-child');
    expect(title.textContent).toBe('title');
  });

  it('renders passed in className', () => {
    detailsSectionTitle = TestUtils.renderIntoDocument(
      <DetailsSectionTitle className="test">Target Child</DetailsSectionTitle>
    );

    expect(ReactDOM.findDOMNode(detailsSectionTitle)).toHaveClass('rs-detail-section-title test');
  });
});
