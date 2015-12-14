import React from 'react';

import StatusIndicator from './StatusIndicator';

class DemoStatusIndicatorSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Status Indicators</h2>
        </div>
        <div className='rs-detail-section-body'>
          <table>
            <thead>
              <tr>
                <td>Status Indicator</td>
                <td>Type</td>
                <td>Source</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <StatusIndicator status='ok'>Active</StatusIndicator>
                </td>
                <td>Ok</td>
                <td><pre><code>{"<StatusIndicator status='ok'>Active</StatusIndicator>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <StatusIndicator status='processing'>Building</StatusIndicator>
                </td>
                <td>Processing</td>
                <td><pre><code>{"<StatusIndicator status='processing'>Building</StatusIndicator>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <StatusIndicator status='warning'>Warning</StatusIndicator>
                </td>
                <td>Warning</td>
                <td><pre><code>{"<StatusIndicator status='warning'>Warning</StatusIndicator>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <StatusIndicator status='error'>Error</StatusIndicator>
                </td>
                <td>Error</td>
                <td><pre><code>{"<StatusIndicator status='error'>Warning</StatusIndicator>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <StatusIndicator status='disabled'>Disabled</StatusIndicator>
                </td>
                <td>Disabled</td>
                <td><pre><code>{"<StatusIndicator status='disabled'>Disabled</StatusIndicator>"}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DemoStatusIndicatorSection;
