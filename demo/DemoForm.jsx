import React from 'react';

import Form from './Form';
import FormField from './FormField';
import DetailsSection from './DetailsSection';

class DemoForm extends React.Component {
  render() {
    return (
      <DetailsSection title="Form">
        <Form size="large">
          <FormField  label="Standard Input" help="This is a field with no particular status">
            <input type="text" />
          </FormField>
          <FormField error="This input is not valid" label="Error Field">
            <input type="text" value="invalid text" />
          </FormField>
          <FormField success="This input is valid" label={ <span><i>Fixed</i> Error Field</span>}>
            <select>
               <option>Option One</option>
               <option>Option Two</option>
             </select>
          </FormField>
          <FormField label="Inline Error" error="This input is not valid" inlineValidation>
            <input type="text" />
          </FormField>
          <FormField label="Inline Success" success inlineValidation>
            <input type="text" />
          </FormField>
        </Form>
      </DetailsSection>
    );
  }
}

export default DemoForm;
