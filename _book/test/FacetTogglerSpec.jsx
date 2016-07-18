import FacetToggler from '../transpiled/FacetToggler';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('FacetToggler', () => {
  let facetToggler;

  const toggleFunction = jasmine.createSpy('onToggle');

  beforeEach(() => {
    facetToggler = TestUtils.renderIntoDocument(
      <FacetToggler criteriaTruncated={true} onToggleChange={toggleFunction} />
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(facetToggler).parentNode);
  });

  it('renders the toggler text correctly', () => {
    expect(ReactDOM.findDOMNode(facetToggler).textContent).toBe('more');
  });

  it('has the right class', () => {
    expect(ReactDOM.findDOMNode(facetToggler)).toHaveClass('rs-facet-section-toggle');
  });

  it('renders a toggle arrow icon', () => {
    let arrowIcon;

    arrowIcon = TestUtils.findRenderedDOMComponentWithTag(facetToggler, 'i');
    expect(arrowIcon.getDOMNode()).toHaveClass('rs-facet-toggle-arrow');
  });

  it('triggers the toggleFunction when clicked', function () {
    TestUtils.Simulate.click(ReactDOM.findDOMNode(facetToggler));

    expect(toggleFunction).toHaveBeenCalledWith(false);
  });

  describe('criteria is not truncated', () => {
    beforeEach(() => {
      facetToggler = TestUtils.renderIntoDocument(
        <FacetToggler criteriaTruncated={false} onToggleChange={toggleFunction} />
      );
    });

    it('renders the toggler text correctly', () => {
      expect(ReactDOM.findDOMNode(facetToggler).textContent).toBe('less');
    });

    it('triggers the toggleFunction when clicked', function () {
      TestUtils.Simulate.click(ReactDOM.findDOMNode(facetToggler));

      expect(toggleFunction).toHaveBeenCalledWith(true);
    });
  });
});
