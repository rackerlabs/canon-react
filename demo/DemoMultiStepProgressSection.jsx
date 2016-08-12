import React from 'react';

import ProgressBarContainer from './ProgressBarContainer';
import ProgressSegment from './ProgressSegment';

class DemoMultiStepProgressSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Multi Step Progress Bars</h2>
        </div>
        <div className='rs-detail-section-body'>
          <ProgressBarContainer size='large'>
            <ProgressSegment width={25} type='solid' status='warning'>1. Step One</ProgressSegment>
            <ProgressSegment width={25} type='striped' status='warning'>2. Step Two</ProgressSegment>
            <ProgressSegment width={25}>3. Step Three</ProgressSegment>
            <ProgressSegment width={25}>4. Step Four</ProgressSegment>
          </ProgressBarContainer>
        </div>
      </div>
    );
  }
}

export default DemoMultiStepProgressSection;
