import React from 'react';
import UtilityNav from './UtilityNav';
import Nav from './Nav';
import NavItem from './NavItem';
import DropdownNavItem from './DropdownNavItem';
import DetailsSection from './DetailsSection';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';

export default class DemoNavSection extends React.Component {

  render () {
    const dropdown = (
      <Dropdown>
        <DropdownItem type="category">
          <strong>Cloud Hosting</strong>
        </DropdownItem>
        <DropdownItem innerProps={{href: "#"}}>
          Rackspace Cloud
        </DropdownItem>
        <DropdownItem innerProps={{href: "#"}}>
          Cloud Sites
        </DropdownItem>
        <DropdownItem innerProps={{href: "#"}}>
          Fanatical Support for AWS
        </DropdownItem>
        <DropdownItem type="divider" />
        <DropdownItem innerProps={{href: "#"}}>
          Logout
        </DropdownItem>
      </Dropdown>
    );

    return (
      <DetailsSection title="UtilityNav">
        <UtilityNav>
          <Nav>
            <DropdownNavItem dropdown={dropdown}>
              Rackspace Cloud
            </DropdownNavItem>
          </Nav>
          <Nav pull="right">
            <NavItem>
              <a href="https://rackspace.com">Trombone Jones</a>
            </NavItem>
          </Nav>
        </UtilityNav>
      </DetailsSection>
    );
  }

};
