import Button from './Button';
import React from 'react';
import TooltipTrigger from './TooltipTrigger';

class DemoTooltipSection extends React.Component {
  render() {
    const tooltipContent = (<div>This is a <strong>tooltip</strong></div>);
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Tooltips</h2>
        </div>
        <div className='rs-detail-section-body'>
          <TooltipTrigger content={tooltipContent}>
            <span>Hello</span>
          </TooltipTrigger>
        </div>
      </div>
    );
  }
}

export default DemoTooltipSection;
