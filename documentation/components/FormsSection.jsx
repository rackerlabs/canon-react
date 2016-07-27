import { Component } from 'react';
import { Row } from './Common';
import {
  Form,
  FormField,
  FormFieldHelp,
  FormFieldValidationBlock,
  FormPopover
} from 'canon-react';

class FormsSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <Row>
            <p> Many features are offered by <code>forms</code> components</p>
          </Row>
          <Row>
            <h3>Input Types</h3>
            <ul>
              <li><code>Standard</code></li>
              <li><code>Error Field</code></li>
              <li><code><i>Fixed</i> Error Field</code></li>
            </ul>
          </Row>
          <Row>
            <div className="span-3">
              <h5>Standard</h5>
              <p><code>standard</code> input field has no decoration</p>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <Form size="large">
                <FormField  label="Standard Input" help="This is a field with no particular status">
                  <input type="text" />
                </FormField>
              </Form>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<Form size='large'>\n" +
                    "  <FormField  label='Standard Input' help='This is a field with no particular status'>\n" +
                    "      <input type='text' />\n" +
                    "  </FormField>\n" +
                    "</Form>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>
          <Row>
            <div className="span-3">
              <h5>Error</h5>
              <p><code>error</code> input field has decoration</p>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <Form size="large">
                <FormField error="This input is not valid" label="Error Field">
                  <input type="text" value="invalid text" />
                </FormField>
              </Form>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<Form size='large'>\n" +
                    "  <FormField error='This input is not valid' label='Error Field'>\n" +
                    "      <input type='text' value='invalid text' />\n" +
                    "  </FormField>\n" +
                    "</Form>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>
          <Row>
            <div className="span-3">
              <h5><i>Fixed</i> Error</h5>
              <p><code><i>fixed</i> error</code> input field has decoration</p>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <Form>
                <FormField success="This input is valid" label={ <span><i>Fixed</i> Error Field</span>}>
                  <select>
                    <option>Option One</option>
                    <option>Option Two</option>
                  </select>
                </FormField>
              </Form>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<Form>\n" +
                    "  <FormField success='This input is valid' label={ <span><i>Fixed</i> Error Field</span>}>\n" +
                    "      <select>\n" +
                    "        <option>Option One</option>\n" +
                    "        <option>Option Two</option>\n" +
                    "      <select>\n" +
                    "  </FormField>\n" +
                    "</Form>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>

        </div>
      </div>
    );
  }
}

export default FormsSection;
