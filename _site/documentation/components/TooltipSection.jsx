import React from 'react';

import TooltipTrigger from '../TooltipTrigger';

class TooltipSection extends React.Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <div className="rs-row">
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#tooltips" target="_blank">Tooltips</a> are used to convey brief snippets of information.</p>
          </div>
          <div className="rs-row">
            <h3>Components</h3>
            <ul>
              <li><code>TooltipTrigger</code></li>
            </ul>
          </div>

          <div className='rs-row'>
            <h5><code>TooltipTrigger</code></h5>
            <p>The <code>TooltipTrigger</code> component wraps an element that, when hovered on, will display a tooltip. This component adds the hover behavior to its child component. The <code>TooltipTrigger</code> has two properties:</p>
            <ul>
              <li><code>placement</code></li>
              <li><code>content</code></li>
            </ul>
            <h6><code>placement</code></h6>
            <p><code>placement</code> defines the position of the tooltip in relation to its trigger. The following values are allowed:</p>
            <ul>
              <li><code>right</code></li>
              <li><code>bottom-right</code></li>
              <li><code>top-right</code></li>
              <li><code>left</code></li>
              <li><code>bottom-left</code></li>
              <li><code>top-left</code></li>
              <li><code>top</code></li>
              <li><code>bottom</code></li>
            </ul>
            <p><code>bottom-right</code> is the default placement.</p>

            <h6><code>content</code></h6>
            <p><code>content</code> is the contents of the tooltip. This can be plain text or react components.</p>
          </div>

          <div className='rs-row'>
            <h3>Tooltip Example</h3>
            <p>A tooltip rendered :</p>
            <TooltipTrigger content="Hello There!">
              <i className="rs-icon-help"></i>
            </TooltipTrigger>
            <p>
              <div className="highlight">
                <pre><code className="html">
                  <span className="nt">&lt;TooltipTrigger</span> <span className="na">content=</span><span className="s">"Hello There!"</span><span className="nt">&gt;</span>
                    <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"rs-icon-help"</span><span className="nt">&gt;</span>
                  <span className="nt">&lt;/TooltipTrigger&gt;</span>
                </code></pre>
              </div>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default TooltipSection;
