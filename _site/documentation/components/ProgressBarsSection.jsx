import { Component } from 'react';
import { ProgressBar } from 'canon-react';
import { Row } from './Common';

class ProgressBarsSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#progress-bars" target="_blank">Progress Bars</a> can be used to indicate both progress and state.</p>
          </Row>

          <Row>
            <h3>Properties</h3>
            <ul>
              <li><code>progress</code></li>
              <li><code>status</code></li>
              <li><code>type</code></li>
              <li><code>size</code></li>
            </ul>
          </Row>

          <Row>
            <div className="span-3">
              <h5>progress</h5>
              <p><code>progress</code> takes a number between 0 and 100 that specifies the percentage of the data being represented.</p>
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
                        <ProgressBar progress={60} status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="nt">/&gt;</span></code></pre>
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
              <h5>status</h5>
              <p><code>status</code> takes a string (<code>info</code> is the default) that specifies the state of the action that is in progress. Allowed Types are:</p>
              <p>
                <ul>
                  <li><code>ok</code></li>
                  <li><code>error</code></li>
                  <li><code>warning</code></li>
                  <li><code>info</code></li>
                </ul>
              </p>
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
                        <ProgressBar progress={60} status='ok' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">status=</span><span className="s">"ok"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} status='error' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">status=</span><span className="s">"error"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} status='warning' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">status=</span><span className="s">"warning"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">status=</span><span className="s">"info"</span> <span className="nt">/&gt;</span></code></pre>
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
              <h5>type</h5>
              <p><code>type</code> takes a string (<code>solid</code> is the default). This is used to indicate additional information about work being done. The allowed types are:</p>
              <p>
                <ul>
                  <li><code>solid</code></li>
                  <li><code>striped</code></li>
                </ul>
              </p>
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
                        <ProgressBar progress={60} type='solid' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">type=</span><span className="s">"solid"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} type='striped' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">type=</span><span className="s">"striped"</span> <span className="nt">/&gt;</span></code></pre>
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
              <h5>size</h5>
              <p>Progress bars can be given a fixed width with the <code>size</code> property. The allowed sizes are:</p>
              <p>
                <ul>
                  <li><code>xsmall</code></li>
                  <li><code>small</code></li>
                  <li><code>medium</code></li>
                  <li><code>large</code></li>
                  <li><code>xlarge</code></li>
                </ul>
              </p>
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
                        <ProgressBar progress={60} size='xsmall' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">size=</span><span className="s">"xsmall"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} size='small' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">size=</span><span className="s">"small"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} size='medium' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">size=</span><span className="s">"medium"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} size='large' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">size=</span><span className="s">"large"</span> <span className="nt">/&gt;</span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <ProgressBar progress={60} size='xlarge' status='info' />
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;ProgressBar</span> <span className="na">progress=</span><span className="s">"60"</span> <span className="na">size=</span><span className="s">"xlarge"</span> <span className="nt">/&gt;</span></code></pre>
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

export default ProgressBarsSection;
