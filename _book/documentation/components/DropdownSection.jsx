import { Component } from 'react';
import { CodeHeader, CodeListItem, PropertyHeader, Row } from './Common';

import {
  Button,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownItem } from 'canon-react';

class DropDownSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#dropdowns" target="_blank">Dropdowns</a> are used to display several related links.</p>
          </Row>

          <Row>
            <h3>Components</h3>
            <ul>
              <CodeListItem>DropdownTrigger</CodeListItem>
              <CodeListItem>Dropdown</CodeListItem>
              <CodeListItem>DropdownItem</CodeListItem>
              <CodeListItem>Divider</CodeListItem>
            </ul>
          </Row>

          <Row>
            <CodeHeader>DropdownTrigger</CodeHeader>
            <p>
              The <code>DropdownTrigger</code> component is a wrapper component.  It wraps whatever component you want to trigger opening the dropdown menu.
              It takes a <code>Dropdown</code> as a prop, and renders this dropdown below the trigger component. The <code>DropdownTrigger</code> also has a <code>alignment</code> property that specifies 
              against which side of the trigger the menu will be aligned. Accepted values are <code>'left'</code> (default) and <code>'right'</code>. this prop is passed through to the <code>Dropdown</code> component.
            </p>
          </Row>

          <Row>
            <CodeHeader>Dropdown</CodeHeader>
            <p>The <code>Dropdown</code> renders the dropdown menu. The <code>Dropdown</code> has the following properties:</p>
            <ul>
              <li><code>type</code></li>
              <li><code>hideCallback</code></li>
              <li><code>alignment</code></li>
            </ul>
          </Row>

          <Row>
            <div className="span-3">
              <h5>type</h5>
              <p>
                <code>type</code> takes a string (<code>action</code> is the default) that controls the look and feel of the dropdown.
                The following types are supported:
              </p>
              <ul>
                <li><code>primary</code></li>
                <li><code>utility</code></li>
                <li><code>action</code></li>
              </ul>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Component</th>
                      <th>Source</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <DropdownTrigger dropdown={
                          <Dropdown type='primary' hideCallback={ () => {} }>
                            <DropdownItem type='category'>Identify</DropdownItem>
                            <DropdownItem type='link'>Rename Server...</DropdownItem>
                            <DropdownItem type='link'>Load Balancers</DropdownItem>
                            <DropdownItem type='link'>DNS</DropdownItem>
                          </Dropdown>
                        }>
                          <Button>Primary Dropdown</Button>
                        </DropdownTrigger>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html">
                          {
                            "<DropdownTrigger dropdown={\n" +
                            "  <Dropdown type='primary'>\n" +
                            "    <DropdownItem type='category'>Identify</DropdownItem>\n" +
                            "    <DropdownItem type='link'>Rename Server...</DropdownItem>\n" +
                            "    <DropdownItem type='link'>Load Balancers</DropdownItem>\n" +
                            "    <DropdownItem type='link'>DNS</DropdownItem>\n" +
                            "  </Dropdown>\n" +
                            "}>\n" +
                            "  <Button>Primary Dropdown</Button>\n" +
                            "</DropdownTrigger>"
                          }
                        </code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <DropdownTrigger alignment='right' dropdown={
                          <Dropdown type='utility' hideCallback={ () => {} }>
                            <DropdownItem type='text'>Account# 1234567</DropdownItem>
                            <Divider/>
                            <DropdownItem type='link'>Billing</DropdownItem>
                            <DropdownItem type='link'>Usage</DropdownItem>
                          </Dropdown>
                        }>
                          <Button>Utility Dropdown</Button>
                        </DropdownTrigger>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html">
                          {
                            "<DropdownTrigger alignment='right' dropdown={\n" +
                            "  <Dropdown type='utility'>\n" +
                            "    <DropdownItem type='text'>Account# 1234567</DropdownItem>\n" +
                            "    <Divider/>\n" +
                            "    <DropdownItem type='link'>Billing</DropdownItem>\n" +
                            "    <DropdownItem type='link'>Usage</DropdownItem>\n" +
                            "  </Dropdown>\n" +
                            "}>\n" +
                            "  <Button>Utility Dropdown</Button>\n" +
                            "</DropdownTrigger>"
                          }
                          </code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <DropdownTrigger dropdown={
                          <Dropdown type='action' hideCallback={ () => {} }>
                            <DropdownItem type='category'>Identify</DropdownItem>
                            <DropdownItem type='link'>Rename Server...</DropdownItem>
                            <DropdownItem type='link'>Tag Server...</DropdownItem>
                          </Dropdown>
                        }>
                          <Button>Action Dropdown</Button>
                        </DropdownTrigger>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html">
                          {
                            "<DropdownTrigger dropdown={\n" +
                            "  <Dropdown type='action'>\n" +
                            "    <DropdownItem type='category'>Identify</DropdownItem>\n" +
                            "    <DropdownItem type='link'>Rename Server...</DropdownItem>\n" +
                            "    <DropdownItem type='link'>Tag Server...</DropdownItem>\n" +
                            "  </Dropdown>\n" +
                            "}>\n" +
                            "  <Button>Action Dropdown</Button>\n" +
                            "</DropdownTrigger>"
                          }
                          </code></pre>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Row>

          <Row>
            <h5>hideCallback</h5>
            <p>
              <code>hideCallback</code> is a function that is called when the user clicks outside the dropdown to hide it.  This prop is provided by the DropdownTrigger.
            </p>
          </Row>

          <Row>
            <CodeHeader>DropdownItem</CodeHeader>
            <p>The <code>DropdownItem</code> is an element rendered within a <code>Dropdown</code> The <code>DropdownItem</code> has the following properties:</p>
            <ul>
              <li><code>enabled</code></li>
              <li><code>onClick</code></li>
              <li><code>hideCallback</code></li>
              <li><code>type</code></li>
            </ul>
          </Row>

          <Row>
            <h5>enabled</h5>
            <p>A boolean value indicating whether or not the item can be clicked on.</p>
          </Row>

          <Row>
            <h5>onClick</h5>
            <p>A callback function that will be called when an enabled item is clicked.</p>
          </Row>

          <Row>
            <h5>hideCallback</h5>
            <p>A callback function that will be called when hiding the menu.  This prop is provided by the <code>Dropdown</code> parent.</p>
          </Row>

          <Row>
            <div className="span-3">
              <h5>type</h5>
              <p>
                <code>type</code> takes a string (<code>link</code> is the default) that controls the look and feel of the <code>DropdownItem</code>
                The following types are supported:
              </p>
              <ul>
                <li><code>link</code></li>
                <li><code>category</code></li>
                <li><code>text</code></li>
              </ul>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <table>
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <DropdownTrigger dropdown={
                        <Dropdown type='utility' hideCallback={ () => {} }>
                          <DropdownItem type='text'>Account #12345678</DropdownItem>
                          <Divider/>
                          <DropdownItem type='category'>Identify</DropdownItem>
                          <DropdownItem type='link'>Rename Server...</DropdownItem>
                          <DropdownItem type='link'>Load Balancers</DropdownItem>
                          <DropdownItem type='link'>DNS</DropdownItem>
                        </Dropdown>
                      }>
                        <Button>Utility Dropdown</Button>
                      </DropdownTrigger>
                    </td>
                    <td>
                      <div className="highlight">
                        <pre><code className="html">
                        {
                          "<DropdownTrigger dropdown={\n" +
                          "  <Dropdown type='utility'>\n" +
                          "    <DropdownItem type='text'>Account #12345678</DropdownItem>\n" +
                          "    <Divider/>\n" +
                          "    <DropdownItem type='category'>Identify</DropdownItem>\n" +
                          "    <DropdownItem type='link'>Rename Server...</DropdownItem>\n" +
                          "    <DropdownItem type='link'>Load Balancers</DropdownItem>\n" +
                          "    <DropdownItem type='link'>DNS</DropdownItem>\n" +
                          "  </Dropdown>\n" +
                          "}>\n" +
                          "  <Button>Primary Dropdown</Button>\n" +
                          "</DropdownTrigger>"
                        }
                        </code></pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Row>

          <Row>
            <CodeHeader>Divider</CodeHeader>
            <p>The <code>Divider</code> is an element rendered within a Utility <code>Dropdown</code>.  It renders a dividing line.</p>
          </Row>
        </div>
      </div>
    );
  }
}

export default DropDownSection;
