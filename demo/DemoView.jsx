import React from 'react';

import DemoButtonSection from './DemoButtonSection';
import DemoButtonGroupSection from './DemoButtonGroupSection';
import DemoPopoverSection from './DemoPopoverSection';
import DemoProgressBarSection from './DemoProgressBarSection';
import DemoStatusIndicatorSection from './DemoStatusIndicatorSection';
import DemoTooltipSection from './DemoTooltipSection';
import DemoDropdownSection from './DemoDropdownSection';
import DemoFacetsSection from './DemoFacetsSection';
import DemoDetailSection from './DemoDetailSection';

class DemoView extends React.Component {
  render() {
    return (
      <div>
        <DemoButtonSection />
        <DemoButtonGroupSection />
        <DemoDetailSection />
        <DemoProgressBarSection />
        <DemoStatusIndicatorSection />
        <DemoPopoverSection />
        <DemoTooltipSection />
        <DemoDropdownSection />
        <DemoFacetsSection />
      </div>
    );
  }
}

export default DemoView;
