import DropdownItem from '../transpiled/DropdownItem';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DropdownItem', () => {
  let dropdownItem, clickFunction, hideFunction;

  beforeEach(() => {
    clickFunction = jasmine.createSpy('clickFunction');
    hideFunction = jasmine.createSpy('hideFunction');

    dropdownItem = TestUtils.renderIntoDocument(
      <DropdownItem
        id='dropdown-id'
        className='test-dropdown-class'
        onClick={clickFunction}
        hideCallback={hideFunction}>Dropdown Text</DropdownItem>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dropdownItem).parentNode);
  });

  it('renders a dropdownItem', () => {
    expect(TestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'li')).not.toBeNull();
  });

  it('keeps the passed in classes', () => {
    expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('test-dropdown-class');
    expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('rs-dropdown-item');
  });

  it('is enabled by default', () => {
    expect(dropdownItem.props.enabled).toBe(true);
    expect(ReactDOM.findDOMNode(dropdownItem)).not.toHaveClass('disabled');
  });

  it('is a link by default', () => {
    expect(dropdownItem.props.type).toBe('link');
  });

  it('keeps all passed in properties', () => {
    expect(ReactDOM.findDOMNode(dropdownItem).id).toBe('dropdown-id');
  });

  it('renders the text of the dropdown', () => {
    expect(ReactDOM.findDOMNode(dropdownItem).textContent).toBe('Dropdown Text');
  });

  it('executes the click function when clicked', () => {
    TestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownItem));

    expect(clickFunction).toHaveBeenCalled();
  });

  it('executes the hide callback when clicked', () => {
    TestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownItem));

    expect(hideFunction).toHaveBeenCalled();
  });

  describe('dropdown types', () => {
    describe('link', () => {
      it('renders an rs-dropdown-link', () => {
        dropdownItem = TestUtils.renderIntoDocument(
          <DropdownItem type='link'/>
        );

        expect(TestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'a').getDOMNode()).toHaveClass('rs-dropdown-link');
      });
    });

    describe('category', () => {
      it('renders an rs-dropdown-category', () => {
        dropdownItem = TestUtils.renderIntoDocument(
          <DropdownItem type='category'/>
        );

        expect(TestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'span').getDOMNode()).toHaveClass('rs-dropdown-category');
      });
    });

    describe('text', () => {
      it('renders an rs-dropdown-text', () => {
        dropdownItem = TestUtils.renderIntoDocument(
          <DropdownItem type='text'/>
        );

        expect(TestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'span').getDOMNode()).toHaveClass('rs-dropdown-text');
      });
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      dropdownItem = TestUtils.renderIntoDocument(
        <DropdownItem enabled={false} onClick={clickFunction}>DropdownItem text</DropdownItem>
      );
    });

    it('adds a disabled class to the dropdownItem', () => {
      expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('disabled');
    });

    it('does not execute the click function when clicked', () => {
      TestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownItem));

      expect(clickFunction).not.toHaveBeenCalled();
    });
  });
});
