import Button from './Button';
import React from 'react';
import TooltipTrigger from './TooltipTrigger';

class DemoTooltipSection extends React.Component {
  render() {
    const tooltipContent = (<span>This is a tooltip</span>);
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Tooltips</h2>
        </div>
        <div className='rs-detail-section-body'>
          <TooltipTrigger content={tooltipContent}>
            <button>Hello</button>
          </TooltipTrigger>
        </div>
      </div>
    );
  }
}

export default DemoTooltipSection;
