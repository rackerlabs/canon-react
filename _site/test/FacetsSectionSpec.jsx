import FacetsSection from '../transpiled/FacetsSection';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('FacetsSection', () => {
  let section, child;

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
    section = renderFacetsSection({}, child);
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(section).parentNode);
  });

  it('hides the clear all link', () => {
    let clearLink;

    clearLink = TestUtils.findRenderedDOMComponentWithClass(section, 'rs-facet-clear-link');
    expect(clearLink.getDOMNode()).toHaveClass('rs-hidden');
  });

  it('calls selection callbacks when child selection is made', () => {
    let childComponent;

    childComponent = TestUtils.findRenderedDOMComponentWithClass(section, 'facetClass');
    childComponent.props.onSelectionChanged(true, 'facetId', 'criteriaId');
    expect(onSelectionChanged).toHaveBeenCalledWith({'facetId': {'criteriaId': true}});
    expect(onCriteriaSelection).toHaveBeenCalledWith('facetId', 'criteriaId');
  });

  describe('withSelections', () => {
    let clearLink, childComponent;

    beforeEach(() => {
      section = renderFacetsSection({'facetId': {'criteriaId': true}}, child);
      clearLink = TestUtils.findRenderedDOMComponentWithClass(section, 'rs-facet-clear-link');
      childComponent = TestUtils.findRenderedDOMComponentWithClass(section, 'facetClass');
    });

    it('renders the clear all link', () => {
      expect(clearLink.getDOMNode()).not.toHaveClass('rs-hidden');
    });

    it('calls selection callbacks when clear all is clicked', () => {
      TestUtils.Simulate.click(clearLink);
      expect(onClearAll).toHaveBeenCalled();
      expect(onSelectionChanged).toHaveBeenCalledWith({});
    });

    it('calls selection callbacks when child deselection is made', () => {
      childComponent.props.onSelectionChanged(false, 'facetId', 'criteriaId');
      expect(onCriteriaDeselection).toHaveBeenCalledWith('facetId', 'criteriaId');
      expect(onSelectionChanged).toHaveBeenCalledWith({});
    });

    it('calls selection callbacks on facet clear', () => {
      childComponent.props.onFacetClear('facetId');
      expect(onFacetClear).toHaveBeenCalledWith('facetId');
      expect(onSelectionChanged).toHaveBeenCalledWith({});
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
