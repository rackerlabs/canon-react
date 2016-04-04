import FacetsSection from '../transpiled/FacetsSection';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('FacetsSection', () => {
  let section, child, selectedCriteria;

  const onSelectionChanged = jasmine.createSpy('onSelectionChanged');
  const onCriteriaSelection = jasmine.createSpy('onCriteriaSelection');
  const onCriteriaDeselection = jasmine.createSpy('onCriteriaDeselection');
  const onFacetClear = jasmine.createSpy('onFacetClear');
  const onClearAll = jasmine.createSpy('onClearAll');

  const renderFacetsSection = (selectedCriteria, children) => {
    return TestUtils.renderIntoDocument(
      <FacetsSection
       sectionHeader="test header"
       selectedCriteria={selectedCriteria}
       onSelectionChanged={onSelectionChanged}
       onCriteriaSelection={onCriteriaSelection}
       onCriteriaDeselection={onCriteriaDeselection}
       onFacetClear={onFacetClear}
       onClearAll={onClearAll}>
        {children}
      </FacetsSection>
    );
  };

  beforeEach(() => {
    onSelectionChanged.calls.reset();
    onCriteriaSelection.calls.reset();
    onCriteriaDeselection.calls.reset();
    onFacetClear.calls.reset();
    onClearAll.calls.reset();
    child = <div id='facetId' className='facetClass' />;
    selectedCriteria = {};
    section = renderFacetsSection(selectedCriteria, child);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(section).parentNode);
  });

  it('hides the clear all link', () => {
    let clearLink;

    clearLink = TestUtils.findRenderedDOMComponentWithClass(section, 'rs-facet-clear-link');
    expect(clearLink.getDOMNode()).toHaveClass('rs-hidden');
  });

  describe('onSelect', () => {
    beforeEach(() => {
      let childComponent;

      childComponent = TestUtils.findRenderedDOMComponentWithClass(section, 'facetClass');
      childComponent.props.onSelectionChanged(true, 'facetId', 'criteriaId');
    });

    it('calls selection callbacks when child selection is made', () => {
      expect(onSelectionChanged).toHaveBeenCalledWith({'facetId': {'criteriaId': true}});
      expect(onCriteriaSelection).toHaveBeenCalledWith('facetId', 'criteriaId');
    });

    it('does not mutate the selectedCriteria prop', () => {
      expect(selectedCriteria).toEqual({});
    });
  });

  describe('withSelections', () => {
    let clearLink, childComponent;

    beforeEach(() => {
      selectedCriteria = {'facetId': {'criteriaId': true}};
      section = renderFacetsSection(selectedCriteria, child);
      clearLink = TestUtils.findRenderedDOMComponentWithClass(section, 'rs-facet-clear-link');
      childComponent = TestUtils.findRenderedDOMComponentWithClass(section, 'facetClass');
    });

    it('renders the clear all link', () => {
      expect(clearLink.getDOMNode()).not.toHaveClass('rs-hidden');
    });

    describe('on clear all', () => {
      beforeEach(() => {
        TestUtils.Simulate.click(clearLink);
      });

      it('calls selection callbacks', () => {
        expect(onClearAll).toHaveBeenCalled();
        expect(onSelectionChanged).toHaveBeenCalledWith({});
      });

      it('does not mutate the selectedCriteria', () => {
        expect(selectedCriteria).toEqual({'facetId': {'criteriaId': true}});
      });
    });

    describe('on child deselect', () => {
      beforeEach(() => {
        childComponent.props.onSelectionChanged(false, 'facetId', 'criteriaId');
      });

      it('calls selection callbacks', () => {
        expect(onCriteriaDeselection).toHaveBeenCalledWith('facetId', 'criteriaId');
        expect(onSelectionChanged).toHaveBeenCalledWith({});
      });

      it('does not mutate the selectedCriteria', () => {
        expect(selectedCriteria).toEqual({'facetId': {'criteriaId': true}});
      });
    });

    describe('on facet clear', () => {
      beforeEach(() => {
        childComponent.props.onFacetClear('facetId');
      });

      it('calls selection callbacks', () => {
        expect(onFacetClear).toHaveBeenCalledWith('facetId');
        expect(onSelectionChanged).toHaveBeenCalledWith({});
      });

      it('does not modify the selectedCriteria prop', () => {
        expect(selectedCriteria).toEqual({'facetId': {'criteriaId': true}});
      });
    });
  });

  describe('with no children', () => {
    beforeEach(() => {
      section = renderFacetsSection({}, null);
    });

    afterEach(() => {
      section = renderFacetsSection({}, child);
    });

    it('does not render anything', () => {
      let sectionComponents;

      sectionComponents = TestUtils.scryRenderedDOMComponentsWithClass(section, 'rs-facets');
      expect(sectionComponents.length).toBe(0);
    });
  });
});
