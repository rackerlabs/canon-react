import React from 'react';

import DemoButtonSection from './DemoButtonSection';
import DemoButtonGroupSection from './DemoButtonGroupSection';
import DemoForm from './DemoForm';
import DemoPopoverSection from './DemoPopoverSection';
import DemoProgressBarSection from './DemoProgressBarSection';
import DemoStatusIndicatorSection from './DemoStatusIndicatorSection';
import DemoTooltipSection from './DemoTooltipSection';
import DemoDropdownSection from './DemoDropdownSection';
import DemoFacetsSection from './DemoFacetsSection';
import DemoDetailSection from './DemoDetailSection';
import DemoDetailSectionCollapsible from './DemoDetailSectionCollapsible';
import DemoDetailSectionDefaultCollapsed from './DemoDetailSectionDefaultCollapsed';
import DemoDetailSectionCollapsibleLoading from './DemoDetailSectionCollapsibleLoading';
import DemoListTableSection from './DemoListTableSection';

class DemoView extends React.Component {
  render() {
    return (
      <div>
        <DemoButtonSection />
        <DemoButtonGroupSection />
        <DemoDetailSection />
        <DemoDetailSectionCollapsible />
        <DemoDetailSectionDefaultCollapsed />
        <DemoDetailSectionCollapsibleLoading />
        <DemoForm />
        <DemoProgressBarSection />
        <DemoStatusIndicatorSection />
        <DemoPopoverSection />
        <DemoTooltipSection />
        <DemoDropdownSection />
        <DemoFacetsSection />
        <DemoListTableSection />
      </div>
    );
  }
}

export default DemoView;
