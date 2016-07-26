import Facet from '../transpiled/Facet';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Facet', () => {
  var facet;

  const onSelectionChanged = jasmine.createSpy('onSelectionChanged');
  const onFacetClear = jasmine.createSpy('onFacetClear');

  const renderFacet = (selectedCriteria, truncationLength, truncationEnabled) => {
    return TestUtils.renderIntoDocument(
      <Facet
       label={'facetLabel'}
       id={'facetId'}
       onSelectionChanged={onSelectionChanged}
       onFacetClear={onFacetClear}
       selectedCriteria={selectedCriteria}
       truncationLength={truncationLength}
       truncationEnabled={truncationEnabled}>
        <div className='facet-child' id='criteriaId' />
      </Facet>
    );
  };

  beforeEach(() => {
    onSelectionChanged.calls.reset();
    onFacetClear.calls.reset();
    facet = renderFacet({}, 5, true);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(facet).parentNode);
  });

  it('has collapsed class', () => {
    let section;

    section = TestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-section');
    expect(section.getDOMNode()).toHaveClass('collapsed');
  });

  it('hides the clear link', () => {
    let clearLink;

    clearLink = TestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-clear-link');
    expect(clearLink.getDOMNode()).toHaveClass('rs-hidden');
  });

  it('does not render a facet toggler', () => {
    let toggleComponents;

    toggleComponents = TestUtils.scryRenderedDOMComponentsWithClass(facet, 'rs-facet-section-toggle');
    expect(toggleComponents.length).toBe(0);
  });

  it('passes selected state to child', () => {
    let child;

    child = TestUtils.findRenderedDOMComponentWithClass(facet, 'facet-child');
    expect(child.props.isSelected).toBe(false);
  });

  it('passes onSelectionChanged callback to child', () => {
    let child;

    child = TestUtils.findRenderedDOMComponentWithClass(facet, 'facet-child');
    child.props.onSelectionChanged(false, 'criteriaId');
    expect(onSelectionChanged).toHaveBeenCalledWith(false, 'facetId', 'criteriaId');
  });

  describe('with selection', () => {
    let selectedCriteria, clearLink;

    beforeEach(() => {
      selectedCriteria = {'criteriaId': true};
      facet = renderFacet(selectedCriteria, 5, true);
      clearLink = TestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-clear-link');
    });

    it('shows the clear link', () => {
      expect(clearLink.getDOMNode()).not.toHaveClass('rs-hidden');
    });

    it('calls onFacetClear when clear is clicked', () => {
      TestUtils.Simulate.click(clearLink);
      expect(onFacetClear).toHaveBeenCalledWith('facetId');
    });

    it('passes selcted state to child', () => {
      let child;

      child = TestUtils.findRenderedDOMComponentWithClass(facet, 'facet-child');
      expect(child.props.isSelected).toBe(true);
    });
  });

  describe('when truncated', () => {
    let toggleComponent;

    beforeEach(() => {
      facet = renderFacet({}, 0, true);
      toggleComponent = TestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-section-toggle');
    });

    it('renders a facet toggler', () => {
      expect(toggleComponent).not.toBeNull();
    });

    it('expands when the facet toggler is clicked', () => {
      let section;

      TestUtils.Simulate.click(toggleComponent);

      section = TestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-section');
      expect(section.getDOMNode()).toHaveClass('expanded');
    });
  });

  describe('with truncation disabled', () => {
    beforeEach(() => {
      facet = renderFacet({}, 0, false);
    });

    it('does not render a facet toggler', () => {
      let toggleComponents;

      toggleComponents = TestUtils.scryRenderedDOMComponentsWithClass(facet, 'rs-facet-section-toggle');
      expect(toggleComponents.length).toBe(0);
    });
  });
});
