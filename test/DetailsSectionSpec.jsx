import DetailsSection from '../transpiled/DetailsSection';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('DetailsSection', () => {
  let detailsSection;

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(detailsSection).parentNode);
  });

  it('displays the title', () => {
    let title;

    detailsSection = TestUtils.renderIntoDocument(<DetailsSection title="test message" />);
    title = TestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-title');
    expect(title.getDOMNode().textContent).toBe('test message');
  });

  it('displays children', () => {
    let sectionChild;

    detailsSection = TestUtils.renderIntoDocument(
      <DetailsSection><span className="test-child">test value</span></DetailsSection>
    );
    sectionChild = TestUtils.findRenderedDOMComponentWithClass(detailsSection, 'test-child');
    expect(sectionChild.getDOMNode().textContent).toBe('test value');
  });
});
