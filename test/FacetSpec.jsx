import Facet from '../transpiled/Facet';
import Criteria from '../transpiled/Criteria';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

describe('Facet', () => {
  var facet;

  const onSelectionChanged = jasmine.createSpy('onSelectionChanged');
  const onFacetClear = jasmine.createSpy('onFacetClear');

  const renderFacet = (selectedCriteria, truncationLength, truncationEnabled) => {
    return ReactTestUtils.renderIntoDocument(
      <Facet
       label={'facetLabel'}
       id={'facetId'}
       onSelectionChanged={onSelectionChanged}
       onFacetClear={onFacetClear}
       selectedCriteria={selectedCriteria}
       truncationLength={truncationLength}
       truncationEnabled={truncationEnabled}>
        <Criteria id='criteriaId' label='criteriaLabel' />
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

    section = ReactTestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-section');
    expect(section).toHaveClass('collapsed');
  });

  it('hides the clear link', () => {
    let clearLink;

    clearLink = ReactTestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-clear-link');
    expect(clearLink).toHaveClass('rs-hidden');
  });

  it('does not render a facet toggler', () => {
    let toggleComponents;

    toggleComponents = ReactTestUtils.scryRenderedDOMComponentsWithClass(facet, 'rs-facet-section-toggle');
    expect(toggleComponents.length).toBe(0);
  });

  it('passes selected state to child', () => {
    let child;

    child = ReactTestUtils.findRenderedComponentWithType(facet, Criteria);
    expect(child.props.isSelected).toBe(false);
  });

  it('passes onSelectionChanged callback to child', () => {
    let child;

    child = ReactTestUtils.findRenderedComponentWithType(facet, Criteria);
    child.props.onSelectionChanged(false, 'criteriaId');
    expect(onSelectionChanged).toHaveBeenCalledWith(false, 'facetId', 'criteriaId');
  });

  describe('with selection', () => {
    let selectedCriteria, clearLink;

    beforeEach(() => {
      selectedCriteria = {'criteriaId': true};
      facet = renderFacet(selectedCriteria, 5, true);
      clearLink = ReactTestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-clear-link');
    });

    it('shows the clear link', () => {
      expect(clearLink).not.toHaveClass('rs-hidden');
    });

    it('calls onFacetClear when clear is clicked', () => {
      ReactTestUtils.Simulate.click(clearLink);
      expect(onFacetClear).toHaveBeenCalledWith('facetId');
    });

    it('passes selcted state to child', () => {
      let child;

      child = ReactTestUtils.findRenderedComponentWithType(facet, Criteria);
      expect(child.props.isSelected).toBe(true);
    });
  });

  describe('when truncated', () => {
    let toggleComponent;

    beforeEach(() => {
      facet = renderFacet({}, 0, true);
      toggleComponent = ReactTestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-section-toggle');
    });

    it('renders a facet toggler', () => {
      expect(toggleComponent).not.toBeNull();
    });

    it('expands when the facet toggler is clicked', () => {
      let section;

      ReactTestUtils.Simulate.click(toggleComponent);

      section = ReactTestUtils.findRenderedDOMComponentWithClass(facet, 'rs-facet-section');
      expect(section).toHaveClass('expanded');
    });
  });

  describe('with truncation disabled', () => {
    beforeEach(() => {
      facet = renderFacet({}, 0, false);
    });

    it('does not render a facet toggler', () => {
      let toggleComponents;

      toggleComponents = ReactTestUtils.scryRenderedDOMComponentsWithClass(facet, 'rs-facet-section-toggle');
      expect(toggleComponents.length).toBe(0);
    });
  });
});
