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

    detailsSection = TestUtils.renderIntoDocument(<DetailsSection title="title" />);
    title = TestUtils.findRenderedDOMComponentWithClass(detailsSection, 'rs-detail-section-title');
    expect(title.getDOMNode().textContent).toBe('title');
  });

  it('displays children', () => {
    let sectionChild;

    detailsSection = TestUtils.renderIntoDocument(
      <DetailsSection title="title"><span className="test-child">test value</span></DetailsSection>
    );
    sectionChild = TestUtils.findRenderedDOMComponentWithClass(detailsSection, 'test-child');
    expect(sectionChild.getDOMNode().textContent).toBe('test value');
  });

  it('has only default class when custom class not provided and does not render caret', () => {
    let caretRendered;
    detailsSection = TestUtils.renderIntoDocument(
      <DetailsSection title="title">
        Test Detail List
      </DetailsSection>
    );

    caretRendered = TestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length !== 0;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section');
    expect(ReactDOM.findDOMNode(detailsSection)).not.toHaveClass('expanded');
    expect(ReactDOM.findDOMNode(detailsSection)).not.toHaveClass('collapsed');
    expect(caretRendered).toBe(false);
  });

  it('renders collapsible section with caret when passed isCollapsible true as prop', () => {
    let caretRendered;
    detailsSection = TestUtils.renderIntoDocument(
      <DetailsSection title="title" isCollapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    caretRendered = TestUtils.scryRenderedDOMComponentsWithClass(detailsSection, 'rs-caret').length === 1;
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
    expect(caretRendered).toBe(true);
  });

  it('expanded section collapses on click', () => {
    detailsSection = TestUtils.renderIntoDocument(
      <DetailsSection title="title" isCollapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(detailsSection));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section collapsed');
  });

  it('collapsed section expands on click', () => {
    detailsSection = TestUtils.renderIntoDocument(
      <DetailsSection title="title" isCollapsible={ true }>
        Test Detail List
      </DetailsSection>
    );

    TestUtils.Simulate.click(ReactDOM.findDOMNode(detailsSection));
    TestUtils.Simulate.click(ReactDOM.findDOMNode(detailsSection));
    expect(ReactDOM.findDOMNode(detailsSection)).toHaveClass('rs-detail-section rs-collapsible-section expanded');
  });
});
