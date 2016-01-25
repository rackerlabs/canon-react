import Dropdown from '../transpiled/Dropdown';
import DropdownItem from '../transpiled/DropdownItem';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('Dropdown', () => {
  let dropdown, hideFunction;

  beforeEach(() => {
    hideFunction = jasmine.createSpy('hideFunction');

    dropdown = TestUtils.renderIntoDocument(
      <Dropdown className='test-dropdown-class' hideCallback={hideFunction}><DropdownItem type='link'>Dropdown Item...</DropdownItem></Dropdown>
    );
  });

  afterEach(() => {
    React.unmountComponentAtNode(React.findDOMNode(dropdown).parentNode);
  });

  it('renders a dropdown', () => {
    expect(React.findDOMNode(dropdown)).toHaveClass('rs-dropdown');
  });

  it('keeps the passed in classes', () => {
    expect(React.findDOMNode(dropdown)).toHaveClass('test-dropdown-class');
  });

  it('defaults to action type', () => {
    expect(dropdown.props.type).toBe('action');
  });

  it('renders children', () => {
    let menu;

    menu = TestUtils.findRenderedDOMComponentWithClass(dropdown, 'rs-dropdown-menu');

    expect(React.findDOMNode(menu).textContent).toBe('Dropdown Item...');
  });

  it('passes hide callback down to dropdown items', () => {
    let childItem;

    childItem = TestUtils.findRenderedComponentWithType(dropdown, DropdownItem);
    TestUtils.Simulate.click(React.findDOMNode(childItem));

    expect(hideFunction).toHaveBeenCalled();
  });

  describe('dropdown types', () => {
    let dropdownItem;

    it('primary', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='primary' hideCallback={hideFunction} />
      );

      expect(React.findDOMNode(dropdownItem)).toHaveClass('rs-nav-item rs-dropdown rs-primary-dropdown');
    });

    it('utility', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='utility' hideCallback={hideFunction} />
      );

      expect(React.findDOMNode(dropdownItem)).toHaveClass('rs-nav-item rs-dropdown rs-utility-dropdown');
    });

    it('action', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='action' hideCallback={hideFunction} />
      );

      expect(React.findDOMNode(dropdownItem)).toHaveClass('rs-dropdown');
    });
  });
});
