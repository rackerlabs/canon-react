import DropdownNavItem from '../transpiled/DropdownNavItem';
import Dropdown from '../transpiled/Dropdown';
import DropdownTrigger from '../transpiled/DropdownTrigger';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('DropdownNavItem', () => {
  let dropdownItem;

  beforeEach(() => {
    const dropdown = <Dropdown />;
    dropdownItem = TestUtils.renderIntoDocument(
      <DropdownNavItem dropdown={dropdown} />
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(dropdownItem).parentNode);
  });

  it('sets dropdown type to utility', () => {
    const trigger = TestUtils.findRenderedComponentWithType(dropdownItem, DropdownTrigger);
    expect(trigger.props.dropdown.props.type).toEqual('utility');
  });

});
