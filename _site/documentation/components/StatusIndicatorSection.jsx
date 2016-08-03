var React = require('react');

var StatusIndicator = require('../StatusIndicator');

var StatusIndicatorSection = React.createClass({
  render: function () {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <div className="rs-row">
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#status-indicators" target="_blank">Status Indicators</a> are used to indicate the state of an entity that may impact a customer's experience.</p>
          </div>
          <div className="rs-row">
            <h3>Properties</h3>
            <ul>
              <li><code>status</code></li>
              <li><code>hidden</code></li>
            </ul>
          </div>

          <div className="rs-row">
            <div className="span-3">
              <h5>status</h5>
              <p><code>status</code> takes a string (<code>ok</code> is the default) that specifies the state of an entity. Allowed Types are:</p>
              <p>
                <ul>
                  <li><code>ok</code></li>
                  <li><code>error</code></li>
                  <li><code>processing</code></li>
                  <li><code>warning</code></li>
                  <li><code>disabled</code></li>
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
                        <StatusIndicator status='ok'>OK</StatusIndicator>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;StatusIndicator</span> <span className="na">status=</span><span className="s">"ok"</span><span className="nt">&gt;OK<span className="nt">&lt;/StatusIndicator&gt;</span></span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <StatusIndicator status='error'>Error</StatusIndicator>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;StatusIndicator</span> <span className="na">status=</span><span className="s">"error"</span><span className="nt">&gt;Error<span className="nt">&lt;/StatusIndicator&gt;</span></span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <StatusIndicator status='processing'>Processing</StatusIndicator>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;StatusIndicator</span> <span className="na">status=</span><span className="s">"processing"</span><span className="nt">&gt;Processing<span className="nt">&lt;/StatusIndicator&gt;</span></span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <StatusIndicator status='warning'>Warning</StatusIndicator>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;StatusIndicator</span> <span className="na">status=</span><span className="s">"warning"</span><span className="nt">&gt;Warning<span className="nt">&lt;/StatusIndicator&gt;</span></span></code></pre>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <StatusIndicator status='disabled'>Disabled</StatusIndicator>
                      </td>
                      <td>
                        <div className="highlight">
                          <pre><code className="html"><span className="nt">&lt;StatusIndicator</span> <span className="na">status=</span><span className="s">"disabled"</span><span className="nt">&gt;Disabled<span className="nt">&lt;/StatusIndicator&gt;</span></span></code></pre>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>);
  }
});

module.exports = StatusIndicatorSection;
