import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import DemoActionMenu from './DemoActionMenu';
import DemoPrimaryDropdown from './DemoPrimaryDropdown';
import DemoUtilityDropdown from './DemoUtilityDropdown';
import DetailsSection from './DetailsSection';
import DropdownTrigger from './DropdownTrigger';

class DemoDropdownSection extends React.Component {
  render() {
    return (
      <DetailsSection title="Dropdowns">
        <div>The buttons on the left demonstrate the default alignment value of 'left', whereas the 'Action' button on the right demonstrates and alignment value of 'right'.</div>
        <ButtonGroup>
          <DropdownTrigger dropdown={<DemoPrimaryDropdown/>}>
            <Button>Primary Dropdown</Button>
          </DropdownTrigger>
          <DropdownTrigger dropdown={<DemoUtilityDropdown/>}>
            <Button>Utility Dropdown</Button>
          </DropdownTrigger>
          <DropdownTrigger dropdown={<DemoActionMenu/>} alignment='right'>
            <div style={ {float: 'right'} }>
              <Button canonStyle='action'>Actions</Button>
            </div>
          </DropdownTrigger>
          <DropdownTrigger dropdown={<DemoActionMenu/>}>
            <div className="rs-cog rs-dropdown-toggle"></div>
          </DropdownTrigger>
        </ButtonGroup>
      </DetailsSection>
    );
  }
}

export default DemoDropdownSection;
