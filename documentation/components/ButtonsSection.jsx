import { Component } from 'react';
import { Button } from 'canon-react';
import { Row } from './Common';

class ButtonsSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          
          <Row>
            <p>Canon offers a variety of different <a href="http://rackerlabs.github.io/canon/ui-components/#buttons" target="_blank">buttons</a>. They are implemented with the <code>Button</code> component.</p>
          </Row>

          <Row>
            <h3>Properties</h3>
            <ul>
              <li><code>onClick</code></li>
              <li><code>enabled</code></li>
              <li><code>hidden</code></li>
              <li><code>canonStyle</code></li>
            </ul>
          </Row>

          <Row>
            <div className="span-3">
              <h5>onClick</h5>
              <p><code>onClick</code> takes the function that will be executed when the button is clicked.</p>
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
                        <Button onClick={function () {alert('Button');}}>Button</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Button')}"}</span><span className="nt">&gt;</span>Button<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Row>

          <Row>
            <div className="span-3">
              <h5>enabled</h5>
              <p><code>enabled</code> takes a boolean value (<code>true</code> by default) that toggles whether or not the button is disabled. When <code>enabled</code> is <code>false</code> the <code>onClick</code> function will not be executed.</p>
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
                        <Button onClick={function () {alert('Enabled');}} enabled={true}>Enabled</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Enabled')}"}</span><span className="nt">&gt;</span>Enabled<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button onClick={function () {alert('Disabled');}} enabled={false}>Disabled</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Disabled')}"}</span> <span className="na">enabled=</span><span className="s">{"{false}"}</span><span className="nt">&gt;</span>Disabled<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Row>

          <Row>
            <div className="span-3">
              <h5>hidden</h5>
              <p><code>hidden</code> takes a boolean value (<code>false</code> by default) that toggles whether or not the button is visible.</p>
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
                        <Button onClick={function () {alert('Visible');}}>Visible</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Visible')}"}</span><span className="nt">&gt;</span>Visible<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button hidden={true} onClick={function () {alert('Hidden');}}>Hidden</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Hidden')}"}</span> <span className="na">hidden=</span><span className="s">"{true}"</span><span className="nt">&gt;</span>Hidden<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Row>

          <Row>
            <div className="span-3">
              <h5>canonStyle</h5>
              <p><code>canonStyle</code> takes a string value (<code>'secondary'</code> by default) that controls the look and feel of the button. The following values are supported:</p>
              <ul>
                <li><code>'primary'</code></li>
                <li><code>'secondary'</code></li>
                <li><code>'link'</code></li>
                <li><code>'login'</code></li>
                <li><code>'cog'</code></li>
                <li><code>'delete'</code></li>
                <li><code>'edit'</code></li>
                <li><code>'plus'</code></li>
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
                        <Button canonStyle='primary' onClick={function () {alert('Primary');}}>Primary</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Primary')}"}</span> <span className="na">canonStyle=</span><span className="s">"primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle='secondary' onClick={function () {alert('Secondary');}}>Secondary</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Secondary')}"}</span> <span className="na">canonStyle=</span><span className="s">"secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle="link" onClick={function () {alert('Link');}}>Link</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Link')}"}</span> <span className="na">canonStyle=</span><span className="s">"link"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle="login" onClick={function () {alert('Login');}}>Login</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Login')}"}</span> <span className="na">canonStyle=</span><span className="s">"login"</span><span className="nt">&gt;</span>Login<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle="cog" onClick={function () {alert('Cog');}}>Cog</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Cog')}"}</span> <span className="na">canonStyle=</span><span className="s">"cog"</span><span className="nt">&gt;</span>Cog<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle='delete' onClick={function () {alert('Delete');}}>Delete</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Delete')}"}</span> <span className="na">canonStyle=</span><span className="s">"delete"</span><span className="nt">&gt;</span>Delete<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle='edit' onClick={function () {alert('Edit');}}>Edit</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Edit')}"}</span> <span className="na">canonStyle=</span><span className="s">"edit"</span><span className="nt">&gt;</span>Edit<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Button canonStyle='plus' onClick={function () {alert('Plus');}}>Plus</Button>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;Button</span> <span className="na">onClick=</span><span className="s">{"function () {alert('Plus')}"}</span> <span className="na">canonStyle=</span><span className="s">"plus"</span><span className="nt">&gt;</span>Plus<span className="nt">&lt;/Button&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Row>

        </div>
      </div>
    );
  }
}

export default ButtonsSection;
