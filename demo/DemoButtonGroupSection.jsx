import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import DetailsSection from './DetailsSection';
import ProcessingIndicator from './ProcessingIndicator';

class DemoButtonGroupSection extends React.Component {
  render() {
    return (
      <div>
        <DetailsSection title="Button Group">
          <ButtonGroup>
            <Button canonStyle='primary' enabled={true}>Primary</Button>
            <Button canonStyle='secondary' enabled={true}>Secondary</Button>
            <Button canonStyle='link' enabled={true}>Cancel</Button>
            <ProcessingIndicator/>
          </ButtonGroup>
        </DetailsSection>
        <DetailsSection title="Button Group with Submitting State">
          <ButtonGroup>
            <Button canonStyle='primary' enabled={false}>Primary</Button>
            <Button canonStyle='secondary' enabled={false}>Secondary</Button>
            <Button canonStyle='link' enabled={false} hidden={true}>Cancel</Button>
            <ProcessingIndicator hidden={false}/>
          </ButtonGroup>
        </DetailsSection>
      </div>
    );
  }
}

export default DemoButtonGroupSection;
