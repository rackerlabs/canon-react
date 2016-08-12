import React from 'react';

import MultiStepProgressBar from './MultiStepProgressBar';
import MultiStepProgressItem from './MultiStepProgressItem';

class DemoMultiStepProgressSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Multi Step Progress Bars</h2>
        </div>
        <div className='rs-detail-section-body'>
          <MultiStepProgressBar size='large'>
            <MultiStepProgressItem progress={25} type='solid' status='warning'>1. Step One</MultiStepProgressItem>
            <MultiStepProgressItem progress={25} type='striped' status='warning'>2. Step Two</MultiStepProgressItem>
            <MultiStepProgressItem progress={25}>3. Step Three</MultiStepProgressItem>
            <MultiStepProgressItem progress={25}>4. Step Four</MultiStepProgressItem>
          </MultiStepProgressBar>
        </div>
      </div>
    );
  }
}

export default DemoMultiStepProgressSection;
