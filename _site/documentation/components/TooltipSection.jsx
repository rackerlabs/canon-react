import { Component } from 'react';
import { CodeHeader, CodeListItem, PropertyHeader, Row } from './Common';

import TooltipTrigger from '../TooltipTrigger';

class TooltipSection extends Component {
  render() {
    return (
      <div className="website-content-section">
        <div className="content-section-body">
          <Row>
            <p><a href="http://rackerlabs.github.io/canon/ui-components/#tooltips" target="_blank">Tooltips</a> are used to convey brief snippets of information.</p>
          </Row>

          <Row>
            <h3>Components</h3>
            <ul>
              <CodeListItem>TooltipTrigger</CodeListItem>
            </ul>
          </Row>

          <Row>
            <CodeHeader>TooltipTrigger</CodeHeader>
            <p>The <code>TooltipTrigger</code> component wraps an element that, when hovered on, will display a tooltip. This component adds the hover behavior to its child component. The <code>TooltipTrigger</code> has two properties:</p>
            <ul>
              <CodeListItem>placement</CodeListItem>
              <CodeListItem>content</CodeListItem>
            </ul>
            <PropertyHeader>placement</PropertyHeader>
            <p><code>placement</code> defines the position of the tooltip in relation to its trigger. The following values are allowed:</p>
            <ul>
              <CodeListItem>right</CodeListItem>
              <CodeListItem>bottom-right</CodeListItem>
              <CodeListItem>top-right</CodeListItem>
              <CodeListItem>left</CodeListItem>
              <CodeListItem>bottom-left</CodeListItem>
              <CodeListItem>top-left</CodeListItem>
              <CodeListItem>top</CodeListItem>
              <CodeListItem>bottom</CodeListItem>
            </ul>
            <p><code>bottom-right</code> is the default placement.</p>

            <PropertyHeader>content</PropertyHeader>
            <p><code>content</code> is the contents of the tooltip. This can be plain text or react components.</p>
          </Row>

          <Row>
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
          </Row>

        </div>
      </div>
    );
  }
}

export default TooltipSection;
