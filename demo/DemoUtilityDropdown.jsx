import React from 'react';

import Divider from './Divider';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

class DemoUtilityDropdown extends React.Component {
  render() {
    return (
      <Dropdown { ...this.props } type='utility'>
        <DropdownItem type='text'>Account# 1234567</DropdownItem>
        <Divider/>
        <DropdownItem type='link'>Billing</DropdownItem>
        <DropdownItem type='link'>Usage</DropdownItem>
        <DropdownItem type='link' enabled={false}>User Management</DropdownItem>
        <DropdownItem type='link'>Settings</DropdownItem>
        <Divider/>
        <DropdownItem type='link'>Logout</DropdownItem>
      </Dropdown>
    );
  }
}

export default DemoUtilityDropdown;
