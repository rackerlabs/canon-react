import React from 'react';

import { SectionHeader } from './Common';
import ButtonGroupSection from './ButtonGroupSection';
import ButtonsSection from './ButtonsSection';
import DropdownSection from './DropdownSection';
import FacetSection from './FacetSection';
import PopoverSection from './PopoverSection';
import ProgressBarsSection from './ProgressBarsSection';
import StatusIndicatorSection from './StatusIndicatorSection';
import TooltipSection from './TooltipSection';
import DetailSection from './DetailSection';
import FormsSection from './FormsSection';

class View extends React.Component {
  render() {
    return (
      <div>
        <div className="rs-inner">
          <div className="rs-container">
            <div className="rs-main">
              <div className="rs-content rs-panel">

                <SectionHeader id="button-groups">Button Groups</SectionHeader>
                <ButtonGroupSection />

                <SectionHeader id="buttons">Buttons</SectionHeader>
                <ButtonsSection />

                <SectionHeader id="detail" name="Details" >Details</SectionHeader>
                <DetailSection />

                <SectionHeader id="dropdown">Dropdowns</SectionHeader>
                <DropdownSection />

                <SectionHeader id="facets">Facets</SectionHeader>
                <FacetSection />

                <SectionHeader id="forms" name="Forms" >Forms</SectionHeader>
                <FormsSection />

                <SectionHeader id="popovers">Popovers</SectionHeader>
                <PopoverSection />

                <SectionHeader id="progress-bars">Progress Bars</SectionHeader>
                <ProgressBarsSection />

                <SectionHeader id="status-indicators">Status Indicators</SectionHeader>
                <StatusIndicatorSection />

                <SectionHeader id="tooltips">Tooltips</SectionHeader>
                <TooltipSection />

              </div>
            </div>
          </div>
        </div>


        <div className="rs-push"></div>
      </div>
    );
  }
}

export default View;
