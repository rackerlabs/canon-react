import React from 'react';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

class DemoPrimaryDropdown extends React.Component {
  render() {
    return (
      <Dropdown { ...this.props } type='primary'>
        <DropdownItem type='category'>Infrastructure</DropdownItem>
        <DropdownItem type='link'>Servers</DropdownItem>
        <DropdownItem type='link'>Load Balancers</DropdownItem>
        <DropdownItem type='link'>DNS</DropdownItem>
        <DropdownItem type='category'>Automation</DropdownItem>
        <DropdownItem type='link' enabled={false}>Deployments</DropdownItem>
        <DropdownItem type='link'>Autoscaling</DropdownItem>
        <DropdownItem type='category'>Developer Tools</DropdownItem>
        <DropdownItem type='link'>Queues</DropdownItem>
        <DropdownItem type='link'>Mailgun <i className="rs-icon-external"/></DropdownItem>
      </Dropdown>
    );
  }
}

export default DemoPrimaryDropdown;
