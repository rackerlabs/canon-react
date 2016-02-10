import Criteria from '../transpiled/Criteria';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('Criteria', () => {
  let criteria;

  const onSelectionChanged = jasmine.createSpy('onSelectionChanged');

  const renderCriteria = (isSelected, disabled, hidden) => {
    return TestUtils.renderIntoDocument(
      <Criteria
       label={'Next Gen'}
       count={5}
       id={'ng'}
       iconClass={'rs-active'}
       isSelected={isSelected}
       disabled={disabled}
       hidden={hidden}
       onSelectionChanged={onSelectionChanged} />
    );
  };

  beforeEach(() => {
    onSelectionChanged.calls.reset();
    criteria = renderCriteria(false, false, false);
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(criteria).parentNode);
  });

  it('has the right class', () => {
    let listItem;

    listItem = TestUtils.findRenderedDOMComponentWithTag(criteria, 'li');
    expect(listItem.getDOMNode()).toHaveClass('rs-facet-item');
  });

  it('has the right title', () => {
    let listItem;

    listItem = TestUtils.findRenderedDOMComponentWithTag(criteria, 'li');
    expect(listItem.getDOMNode().title).toBe('Next Gen');
  });

  it('shows an element with the icon class', () => {
    expect(TestUtils.findRenderedDOMComponentWithClass(criteria, 'rs-active')).not.toBeNull();
  });

  it('has the right label', () => {
    let label;

    label = TestUtils.findRenderedDOMComponentWithClass(criteria, 'rs-facet-label');
    expect(label.getDOMNode().textContent).toBe('Next Gen');
  });

  it('has the right count', () => {
    let listItem;

    listItem = TestUtils.findRenderedDOMComponentWithClass(criteria, 'rs-facet-count');
    expect(listItem.getDOMNode().textContent).toBe('(5)');
  });

  it('handles changing selection', () => {
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(criteria, 'li'));
    expect(onSelectionChanged).toHaveBeenCalledWith(true, 'ng');
  });

  describe('selected', () => {
    beforeEach(() => {
      criteria = renderCriteria(true, false, false);
    });

    it('handles changing selection', () => {
      TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(criteria, 'li'));
      expect(onSelectionChanged).toHaveBeenCalledWith(false, 'ng');
    });

    it('has the correct class', () => {
      let listItem;

      listItem = TestUtils.findRenderedDOMComponentWithTag(criteria, 'li');
      expect(listItem.getDOMNode()).toHaveClass('selected');
    });
  });

  describe('disabled', () => {
    beforeEach(() => {
      criteria = renderCriteria(false, true, false);
    });

    it('has the correct class', () => {
      let listItem;

      listItem = TestUtils.findRenderedDOMComponentWithTag(criteria, 'li');
      expect(listItem.getDOMNode()).toHaveClass('disabled');
    });

    it('does not change selection', () => {
      TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(criteria, 'li'));
      expect(onSelectionChanged).not.toHaveBeenCalled();
    });
  });

  describe('hidden', () => {
    beforeEach(() => {
      criteria = renderCriteria(false, false, true);
    });

    it('has the correct class', () => {
      let listItem;

      listItem = TestUtils.findRenderedDOMComponentWithTag(criteria, 'li');
      expect(listItem.getDOMNode()).toHaveClass('rs-hidden');
    });
  });
});
