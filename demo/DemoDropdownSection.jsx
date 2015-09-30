import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import DemoActionMenu from './DemoActionMenu';
import DemoPrimaryDropdown from './DemoPrimaryDropdown';
import DemoUtilityDropdown from './DemoUtilityDropdown';
import DropdownTrigger from './DropdownTrigger';

class DemoDropdownSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Dropdowns</h2>
        </div>
        <div className='rs-detail-section-body'>
          <ButtonGroup>
            <DropdownTrigger dropdown={<DemoPrimaryDropdown/>}>
              <Button>Primary Dropdown</Button>
            </DropdownTrigger>
            <DropdownTrigger dropdown={<DemoUtilityDropdown/>}>
              <Button>Utility Dropdown</Button>
            </DropdownTrigger>
            <DropdownTrigger dropdown={<DemoActionMenu/>}>
              <Button type='action'>Actions</Button>
            </DropdownTrigger>
            <DropdownTrigger dropdown={<DemoActionMenu/>}>
              <div className="rs-cog rs-dropdown-toggle"></div>
            </DropdownTrigger>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default DemoDropdownSection;
