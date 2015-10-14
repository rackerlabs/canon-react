import React from 'react';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

class DemoActionMenu extends React.Component {
  render() {
    return (
      <Dropdown { ...this.props } type='action'>
        <DropdownItem type='category'>Identify</DropdownItem>
        <DropdownItem type='link'>Rename Server...</DropdownItem>
        <DropdownItem type='link'>Tag Server...</DropdownItem>
        <DropdownItem type='category'>Image</DropdownItem>
        <DropdownItem type='link'>Create Image...</DropdownItem>
        <DropdownItem type='link'>Schedule Daily Image...</DropdownItem>
        <DropdownItem type='category'>Recover</DropdownItem>
        <DropdownItem type='link'>Rebuild From Image...</DropdownItem>
        <DropdownItem type='link' enabled={false}>Enter Rescue Mode...</DropdownItem>
        <DropdownItem type='category'>Manage</DropdownItem>
        <DropdownItem type='link'>Connect Via Terminal...</DropdownItem>
        <DropdownItem type='link'>Reboot Server...</DropdownItem>
        <DropdownItem type='link'>Resize Server...</DropdownItem>
        <DropdownItem type='link' enabled={false}>Change Password...</DropdownItem>
        <DropdownItem type='link'>Delete Server...</DropdownItem>
      </Dropdown>
    );
  }
}

export default DemoActionMenu;
