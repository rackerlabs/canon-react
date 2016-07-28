import React from 'react';

import DetailsSection from './DetailsSection';
import ProgressBar from './ProgressBar';

class DemoProgressBarSection extends React.Component {
  render() {
    return (
      <div>
        <DetailsSection title="Progress Bars">
          <ProgressBar progress={25} type='solid' status='ok'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='ok'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='warning'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='warning'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='error'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='error'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='info'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='info'/>
        </DetailsSection>
        <DetailsSection title="Fixed Width Progress Bars">
          <ProgressBar progress={25} size='xsmall'/>
          <br/>
          <ProgressBar progress={25} size='small'/>
          <br/>
          <ProgressBar progress={25} size='medium'/>
          <br/>
          <ProgressBar progress={25} size='large'/>
          <br/>
          <ProgressBar progress={25} size='xlarge'/>
        </DetailsSection>
      </div>
    );
  }
}

export default DemoProgressBarSection;
