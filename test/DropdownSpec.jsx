import Dropdown from '../transpiled/Dropdown';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

describe('Dropdown', () => {
  var dropdown;

  beforeEach(() => {
    dropdown = TestUtils.renderIntoDocument(
      <Dropdown className='test-dropdown-class' >Dropdown Text</Dropdown>
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
    var menu;

    menu = TestUtils.findRenderedDOMComponentWithClass(dropdown, 'rs-dropdown-menu');

    expect(React.findDOMNode(menu).textContent).toBe('Dropdown Text');
  });

  describe('dropdown types', () => {
    var dropdownItem;

    it('primary', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='primary'/>
      );

      expect(React.findDOMNode(dropdownItem)).toHaveClass('rs-nav-item rs-dropdown rs-primary-dropdown');
    });

    it('utility', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='utility'/>
      );

      expect(React.findDOMNode(dropdownItem)).toHaveClass('rs-nav-item rs-dropdown rs-utility-dropdown');
    });

    it('action', () => {
      dropdownItem = TestUtils.renderIntoDocument(
        <Dropdown type='action'/>
      );

      expect(React.findDOMNode(dropdownItem)).toHaveClass('rs-dropdown');
    });
  });
});
