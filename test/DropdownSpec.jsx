import Dropdown from '../transpiled/Dropdown';
import DropdownItem from '../transpiled/DropdownItem';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Dropdown', () => {
  let dropdown, hideFunction;

  beforeEach(() => {
    hideFunction = jasmine.createSpy('hideFunction');

    dropdown = TestUtils.renderIntoDocument(
      <Dropdown className='test-dropdown-class' hideCallback={hideFunction}><DropdownItem type='link'>Dropdown Item...</DropdownItem></Dropdown>
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dropdown).parentNode);
  });

  it('renders a dropdown', () => {
    expect(ReactDOM.findDOMNode(dropdown)).toHaveClass('rs-dropdown');
  });

  it('keeps the passed in classes', () => {
    expect(ReactDOM.findDOMNode(dropdown)).toHaveClass('test-dropdown-class');
  });

  it('defaults to action type', () => {
    expect(dropdown.props.type).toBe('action');
  });

  it('renders children', () => {
    let menu;

    menu = TestUtils.findRenderedDOMComponentWithClass(dropdown, 'rs-dropdown-menu');

    expect(ReactDOM.findDOMNode(menu).textContent).toBe('Dropdown Item...');
  });

  it('passes hide callback down to dropdown items', () => {
    let childItem;

    childItem = TestUtils.findRenderedComponentWithType(dropdown, DropdownItem);
    TestUtils.Simulate.click(ReactDOM.findDOMNode(childItem));

    expect(hideFunction).toHaveBeenCalled();
  });

  describe('dropdown types', () => {
    let dropdownItem;

    it('primary', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='primary' hideCallback={hideFunction} />
      );

      expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('rs-nav-item rs-dropdown rs-primary-dropdown');
    });

    it('utility', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='utility' hideCallback={hideFunction} />
      );

      expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('rs-nav-item rs-dropdown rs-utility-dropdown');
    });

    it('action', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='action' hideCallback={hideFunction} />
      );

      expect(ReactDOM.findDOMNode(dropdownItem)).toHaveClass('rs-dropdown');
    });
  });
});
