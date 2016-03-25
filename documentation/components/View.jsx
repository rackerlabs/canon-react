import React from 'react';

import ButtonsSection from './ButtonsSection';
import ButtonGroupSection from './ButtonGroupSection';
import PopoverSection from './PopoverSection';
import ProgressBarsSection from './ProgressBarsSection';
import { SectionHeader } from './Common';
import StatusIndicatorSection from './StatusIndicatorSection';
import TooltipSection from './TooltipSection';
import FacetSection from './FacetSection';

class View extends React.Component {
  render() {
    return (
      <div>
        <div className="rs-inner">
          <div className="rs-container">
            <div className="rs-main">
              <div className="rs-content rs-panel">

                <SectionHeader id="buttons">Buttons</SectionHeader>
                <ButtonsSection />

                <SectionHeader id="button-groups">Button Groups</SectionHeader>
                <ButtonGroupSection />

                <SectionHeader id="progress-bars">Progress Bars</SectionHeader>
                <ProgressBarsSection />

                <SectionHeader id="status-indicators">Status Indicators</SectionHeader>
                <StatusIndicatorSection />

                <SectionHeader id="popovers">Popovers</SectionHeader>
                <PopoverSection />

                <SectionHeader id="tooltips">Tooltips</SectionHeader>
                <TooltipSection />

                <SectionHeader id="facets">Facets</SectionHeader>
                <FacetSection />
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
