import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import ProcessingIndicator from './ProcessingIndicator';

class DemoButtonGroupSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Button Group</h2>
        </div>
        <div className='rs-detail-section-body'>
          <ButtonGroup>
            <Button type='primary' enabled={true}>Primary</Button>
            <Button type='secondary' enabled={true}>Secondary</Button>
            <Button type='link' enabled={true}>Cancel</Button>
            <ProcessingIndicator/>
          </ButtonGroup>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Submitting State</h3>
          <ButtonGroup>
            <Button type='primary' enabled={false}>Primary</Button>
            <Button type='secondary' enabled={false}>Secondary</Button>
            <Button type='link' enabled={false} hidden={true}>Cancel</Button>
            <ProcessingIndicator hidden={false}/>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default DemoButtonGroupSection;
