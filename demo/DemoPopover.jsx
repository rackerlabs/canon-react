import React from 'react';

import Button from './Button';
import FormPopover from './FormPopover';
import FormField from './FormField';

class DemoPopover extends React.Component {
  render() {
    return (
      <FormPopover
        {...this.props}
        submitButton={<Button canonStyle="primary">Save</Button>}
        size="medium" >
        <FormField label="Field 1">
          <input type="text" />
        </FormField>
      </FormPopover>
    );
  }
}

DemoPopover.propTypes = {
  isOpen: React.PropTypes.bool,
  onRequestClose: React.PropTypes.func
};

export default DemoPopover;
