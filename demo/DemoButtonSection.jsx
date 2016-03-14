import React from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

class DemoButtonSection extends React.Component {
  render() {
    return (
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Buttons</h2>
        </div>
        <div className='rs-detail-section-body'>
          <table>
            <thead>
              <tr>
                <td>Button</td>
                <td>Type</td>
                <td>Source</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Button canonStyle='primary'>Primary</Button>
                </td>
                <td>Primary</td>
                <td><pre><code>{"<Button canonStyle='primary'>Primary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='secondary'>Secondary</Button>
                </td>
                <td>Secondary</td>
                <td><pre><code>{"<Button canonStyle='secondary'>Secondary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='login'>Login</Button>
                </td>
                <td>Login</td>
                <td><pre><code>{"<Button canonStyle='login'>Login</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='link'>Cancel</Button>
                </td>
                <td>Link</td>
                <td><pre><code>{"<Button canonStyle='link'>Cancel</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='delete'>Delete</Button>
                </td>
                <td>Delete</td>
                <td><pre><code>{"<Button canonStyle='delete'>Delete</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='edit'>Edit</Button>
                </td>
                <td>Edit</td>
                <td><pre><code>{"<Button canonStyle='edit'>Edit</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='plus'>Plus</Button>
                </td>
                <td>Plus</td>
                <td><pre><code>{"<Button canonStyle='plus'>Plus</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='action'>Actions</Button>
                </td>
                <td>Action</td>
                <td><pre><code>{"<Button canonStyle='action'>Actions</Button>"}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Disabled Buttons</h3>
          <table>
            <thead>
              <tr>
                <td>Button</td>
                <td>Type</td>
                <td>Source</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Button canonStyle='primary' enabled={false}>Primary</Button>
                </td>
                <td>Primary</td>
                <td><pre><code>{"<Button canonStyle='primary' enabled={false}>Primary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='secondary' enabled={false}>Secondary</Button>
                </td>
                <td>Secondary</td>
                <td><pre><code>{"<Button canonStyle='secondary' enabled={false}>Secondary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='login' enabled={false}>Login</Button>
                </td>
                <td>Login</td>
                <td><pre><code>{"<Button canonStyle='login' enabled={false}>Login</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='link' enabled={false}>Cancel</Button>
                </td>
                <td>Link</td>
                <td><pre><code>{"<Button canonStyle='link' enabled={false}>Cancel</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button canonStyle='edit' enabled={false}>Edit</Button>
                </td>
                <td>Edit</td>
                <td><pre><code>{"<Button canonStyle='edit' enabled={false}>Edit</Button>"}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DemoButtonSection;
