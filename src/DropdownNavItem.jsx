import React from 'react';
import NavItem from './NavItem';
import DropdownTrigger from './DropdownTrigger';

export default class DropdownNavItem extends React.Component {

  render() {
    const dropdown = React.cloneElement(this.props.dropdown, {type: 'utility'});

    return (
      <NavItem className="rs-dropdown rs-utility-dropdown">
        <DropdownTrigger dropdown={dropdown}>
          <a className="rs-dropdown-toggle">
            { this.props.children }
            <i className="rs-caret"></i>
          </a>
        </DropdownTrigger>
      </NavItem>
    );
  }

};
