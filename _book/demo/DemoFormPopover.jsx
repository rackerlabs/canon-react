import React from 'react';

import FormField from './FormField';
import FormPopover from './FormPopover';

class DemoFormPopover extends React.Component {
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

export default DemoFormPopover;
