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
          <table>
            <tbody>
              <tr>
                <td>
                  <TooltipTrigger placement='bottom-right' content={tooltipContent}>
                    <span>Bottom Right</span>
                  </TooltipTrigger>
                </td>
                <td>
                  <TooltipTrigger placement='bottom-left' content={tooltipContent}>
                    <span>Bottom Left</span>
                  </TooltipTrigger>
                </td>
                <td>
                  <TooltipTrigger placement='top' content={tooltipContent}>
                    <span>Top</span>
                  </TooltipTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <TooltipTrigger placement='top-right' content={tooltipContent}>
                    <span>Top Right</span>
                  </TooltipTrigger>
                </td>
                <td>
                  <TooltipTrigger placement='top-left' content={tooltipContent}>
                    <span>Top Left</span>
                  </TooltipTrigger>
                </td>
                <td>
                  <TooltipTrigger placement='bottom' content={tooltipContent}>
                    <span>Bottom</span>
                  </TooltipTrigger>
                </td>
              </tr>
              <tr>
                <td>
                  <TooltipTrigger placement='right' content={tooltipContent}>
                    <span>Right</span>
                  </TooltipTrigger>
                </td>
                <td>
                  <TooltipTrigger placement='left' content={tooltipContent}>
                    <span>Left</span>
                  </TooltipTrigger>
                </td>
                <td>
                  <TooltipTrigger content={tooltipContent}>
                    <button>Focus</button>
                  </TooltipTrigger>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DemoTooltipSection;
