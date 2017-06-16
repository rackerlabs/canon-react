import DropdownItem from '../transpiled/DropdownItem';
import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

describe('DropdownItem', () => {
  let dropdownItem, clickFunction, hideFunction;

  beforeEach(() => {
    clickFunction = jasmine.createSpy('clickFunction');
    hideFunction = jasmine.createSpy('hideFunction');

    dropdownItem = ReactTestUtils.renderIntoDocument(
      <DropdownItem
        id='dropdown-id'
        className='test-dropdown-class'
        onClick={clickFunction}
        hideCallback={hideFunction}
        innerProps={{href: 'https://rackerlabs.github.io/canon-react/'}}>
          Dropdown Text
      </DropdownItem>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dropdownItem).parentNode);
  });

  it('renders a dropdownItem', () => {
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'li')).not.toBeNull();
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

  it('passes innerProps to innerElement', () => {
    const innerElement = ReactTestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'a');
    expect(innerElement.href).toBe('https://rackerlabs.github.io/canon-react/');
  });

  it('renders the text of the dropdown', () => {
    expect(ReactDOM.findDOMNode(dropdownItem).textContent).toBe('Dropdown Text');
  });

  it('executes the click function when clicked', () => {
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownItem));

    expect(clickFunction).toHaveBeenCalled();
  });

  it('executes the hide callback when clicked', () => {
    ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownItem));

    expect(hideFunction).toHaveBeenCalled();
  });

  describe('dropdown types', () => {
    describe('link', () => {
      it('renders an rs-dropdown-link', () => {
        dropdownItem = ReactTestUtils.renderIntoDocument(
          <DropdownItem type='link'/>
        );

        expect(ReactTestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'a')).toHaveClass('rs-dropdown-link');
      });
    });

    describe('category', () => {
      it('renders an rs-dropdown-category', () => {
        dropdownItem = ReactTestUtils.renderIntoDocument(
          <DropdownItem type='category'/>
        );

        expect(ReactTestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'span')).toHaveClass('rs-dropdown-category');
      });
    });

    describe('text', () => {
      it('renders an rs-dropdown-text', () => {
        dropdownItem = ReactTestUtils.renderIntoDocument(
          <DropdownItem type='text'/>
        );

        expect(ReactTestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'span')).toHaveClass('rs-dropdown-text');
      });
    });

    describe('divider', () => {
      it('renders an rs-divider', () => {
        dropdownItem = ReactTestUtils.renderIntoDocument(
          <DropdownItem type='divider'/>
        );

        expect(ReactTestUtils.findRenderedDOMComponentWithTag(dropdownItem, 'div')).toHaveClass('rs-divider');
      });
    });
  });

  describe('when disabled', () => {
    beforeEach(() => {
      dropdownItem = ReactTestUtils.renderIntoDocument(
        <DropdownItem enabled={false} onClick={clickFunction}>DropdownItem text</DropdownItem>
      );
    });

    it('adds a disabled class to the dropdownItem', () => {
      expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('disabled');
    });

    it('does not execute the click function when clicked', () => {
      ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(dropdownItem));

      expect(clickFunction).not.toHaveBeenCalled();
    });
  });
});
