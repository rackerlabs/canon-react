import React from 'react';

import FormField from './FormField';
import FormPopover from './FormPopover';

class DemoPopover extends React.Component {
  render() {
    return (
      <FormPopover {...this.props} >
        <FormField label="Field">
          <input type="text" />
        </FormField>
      </FormPopover>
    );
  }
}

export default DemoPopover;
