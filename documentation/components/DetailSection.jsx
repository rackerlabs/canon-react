import { Component } from 'react';
import {
  DetailsSection,
  DetailItem,
  DetailItemKey,
  DetailItemValue,
  DetailsSectionTitle,
  DetailsSectionSubtitle,
  DetailList
} from 'canon-react';
import { Row } from './Common';

class DetailSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <Row>
            <p> Canon offers many diffferent <code>details</code> components</p>
          </Row>

          <Row>
            <h3>Included Types</h3>
            <ul>
              <li><code>DetailsSection</code></li>
              <li><code>DetailList</code></li>
              <li><code>DetailItem</code></li>
              <li><code>DetailItemKey</code></li>
              <li><code>DetailItemValue</code></li>
              <li><code>DetailsSectionTitle</code></li>
              <li><code>DetailsSectionSubtitle</code></li>
            </ul>
          </Row>

          <Row>
            <div className="span-3">
              <h5>Details Section</h5>
              <p><code>Details Section</code> has the following properties</p>
                <Row>
                  <ul>
                    <li><code>title</code> takes a string or component</li>
                    <li><code>headers</code> takes a component and places it in the header of a details section</li>
                    <li><code>isLoading</code> takes a boolean which will can the section as loading, therefore not expandable until it changes state</li>
                    <li><code>initialCollapsed</code> takes a boolean which will show the section as initially collapsed </li>
                    <li><code>onToggleCollapsed</code> takes a callback function to execute some action when a section changes state</li>
                    <li><code>collapsible</code> takes a boolean to determine if the section is collapsible or not</li>
                    <li><code>subtitle</code> takes a component</li>
                    <li><code>children</code> takes a component</li>
                    <li><code>className</code> takes a string</li>
                  </ul>
              </Row>
            </div>
            <div className="span-8 offset-1">
              <h4>Examples</h4>
              <DetailsSection title="Details Section" subtitle={ <DetailsSectionSubtitle>(non-collapsed)</DetailsSectionSubtitle> }>
                <table>
                  <thead>
                    <tr>
                      <td>Component</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <DetailList>
                          <DetailItem>
                            <DetailItemKey>Server ID</DetailItemKey>
                            <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
                          </DetailItem>
                          <DetailItem>
                            <DetailItemKey>Region</DetailItemKey>
                            <DetailItemValue>Dallas (DFW)</DetailItemValue>
                          </DetailItem>
                        </DetailList>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </DetailsSection>
              <DetailsSection collapsible={ true } initialCollapsed={ true } title="Collapsible Details Section (default - collapsed)">
                <table>
                  <thead>
                    <tr>
                      <td>Component</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <DetailList>
                          <DetailItem>
                            <DetailItemKey>Server ID</DetailItemKey>
                            <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
                          </DetailItem>
                          <DetailItem>
                            <DetailItemKey>Region</DetailItemKey>
                            <DetailItemValue>Dallas (DFW)</DetailItemValue>
                          </DetailItem>
                        </DetailList>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </DetailsSection>
              <DetailsSection collapsible={ true } isLoading={ true } title="Collapsible Details Section (loading)">
                <table>
                  <thead>
                    <tr>
                      <td>Component</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <DetailList>
                          <DetailItem>
                            <DetailItemKey>Server ID</DetailItemKey>
                            <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
                          </DetailItem>
                          <DetailItem>
                            <DetailItemKey>Region</DetailItemKey>
                            <DetailItemValue>Dallas (DFW)</DetailItemValue>
                          </DetailItem>
                        </DetailList>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </DetailsSection>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<DetailsSection collapsible={ true } initialCollapsed={ true } title='Collapsible Details Section (default - collapsed)'>\n" +
                    "  ...\n" +
                    "</DetailsSection>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>
          <Row>
            <div className="span-3">
              <h5>DetailList</h5>
              <p><code>DetailList</code> has the following properties</p>
              <Row>
                <ul>
                  <li><code>children</code> takes a component</li>
                  <li><code>className</code> takes a string</li>
                </ul>
              </Row>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <DetailList>
                <DetailItem>
                  <DetailItemKey>Server ID</DetailItemKey>
                  <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
                </DetailItem>
                <DetailItem>
                  <DetailItemKey>Region</DetailItemKey>
                  <DetailItemValue>Dallas (DFW)</DetailItemValue>
                </DetailItem>
                <DetailItem>
                  <DetailItemKey>Server ID</DetailItemKey>
                  <DetailItemValue>lkjjdd-fdfsdfsfd-hdfdsf-fdsfsdfds</DetailItemValue>
                </DetailItem>
                <DetailItem>
                  <DetailItemKey>Region</DetailItemKey>
                  <DetailItemValue>San Francisco (SFO)</DetailItemValue>
                </DetailItem>
              </DetailList>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<DetailList>\n" +
                    "  ...\n" +
                    "</DetailList>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>
          <Row>
            <div className="span-3">
              <h5>DetailItem</h5>
              <p><code>DetailItem</code> has the following properties</p>
              <Row>
                <ul>
                  <li><code>children</code> takes a component</li>
                  <li><code>className</code> takes a string</li>
                </ul>
              </Row>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <DetailItem>
                <DetailItemKey>Server ID</DetailItemKey>
                <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
              </DetailItem>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<DetailItem\n" +
                    "  ...\n" +
                    "</DetailItem>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>
          <Row>
            <div className="span-3">
              <h5>Detail Item Key/Value</h5>
              <p><code>Detail Item Key</code> and <code>Detail Item Value</code> have the following properties</p>
              <Row>
                <ul>
                  <li><code>children</code> takes a component</li>
                  <li><code>className</code> takes a string</li>
                </ul>
              </Row>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <DetailItemKey>Server ID</DetailItemKey>
              <DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<DetailItemKey>Server ID</DetailItemKey>\n" +
                    "<DetailItemValue>adfsad-lkjasdli-aldjsdk-alkasdlkf</DetailItemValue>"
                  }
                </code></pre>
              </div>
            </div>
          </Row>
          <Row>
            <div className="span-3">
              <h5>DetailSectionTitle/Subtitle</h5>
              <p><code>Detail Section Title</code> and <code>Detail Section Subtitle</code> have the following properties</p>
              <Row>
                <ul>
                  <li><code>children</code> takes a component</li>
                  <li><code>className</code> takes a string</li>
                </ul>
              </Row>
            </div>
            <div className="span-8 offset-1">
              <h4>Example</h4>
              <DetailsSectionTitle> Title </DetailsSectionTitle>
              <DetailsSectionSubtitle> Subtitle </DetailsSectionSubtitle>
              <h6>Code</h6>
              <div className="highlight">
                <pre><code className="js">
                  {
                    "<DetailsSectionTitle> Title </DetailsSectionTitle>\n" +
                    "<DetailsSectionSubtitle> Subtitle </DetailsSectionSubtitle>"
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

export default DetailSection;
