var React = require('react');

//Enable these to test current Canon React Version Components
// var CanonReact = require('canon-react');
// var Button = CanonReact.Button;
// var ButtonGroup = CanonReact.ButtonGroup;
// var ProgressBar = CanonReact.ProgressBar;
// var ProcessingIndicator = CanonReact.ProgressBar;

//Enable these to test your local changes to components (for developers)
var Button = require('./Button');
var ActionButton = require('./ActionButton');
var ButtonGroup = require('./ButtonGroup');
var ProcessingIndicator = require('./ProcessingIndicator');
var ProgressBar = require('./ProgressBar');
var StatusIndicator = require('./StatusIndicator');

(function () {
  React.render(
    <div>
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
                  <Button type='primary'>Primary</Button>
                </td>
                <td>Primary</td>
                <td><pre><code>{"<Button type='primary'>Primary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='secondary'>Secondary</Button>
                </td>
                <td>Secondary</td>
                <td><pre><code>{"<Button type='secondary'>Secondary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='login'>Login</Button>
                </td>
                <td>Login</td>
                <td><pre><code>{"<Button type='login'>Login</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='link'>Cancel</Button>
                </td>
                <td>Link</td>
                <td><pre><code>{"<Button type='link'>Cancel</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='delete'>Delete</Button>
                </td>
                <td>Delete</td>
                <td><pre><code>{"<Button type='delete'>Delete</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='edit'>Edit</Button>
                </td>
                <td>Edit</td>
                <td><pre><code>{"<Button type='edit'>Edit</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='plus'>Plus</Button>
                </td>
                <td>Plus</td>
                <td><pre><code>{"<Button type='plus'>Plus</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <ActionButton>Action</ActionButton>
                </td>
                <td>Plus</td>
                <td><pre><code>{"<ActionButton>Action</ActionButton>"}</code></pre></td>
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
                  <Button type='primary' enabled={false}>Primary</Button>
                </td>
                <td>Primary</td>
                <td><pre><code>{"<Button type='primary' enabled={false}>Primary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='secondary' enabled={false}>Secondary</Button>
                </td>
                <td>Secondary</td>
                <td><pre><code>{"<Button type='secondary' enabled={false}>Secondary</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='login' enabled={false}>Login</Button>
                </td>
                <td>Login</td>
                <td><pre><code>{"<Button type='login' enabled={false}>Login</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='link' enabled={false}>Cancel</Button>
                </td>
                <td>Link</td>
                <td><pre><code>{"<Button type='link' enabled={false}>Cancel</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <Button type='edit' enabled={false}>Edit</Button>
                </td>
                <td>Edit</td>
                <td><pre><code>{"<Button type='edit' enabled={false}>Edit</Button>"}</code></pre></td>
              </tr>
              <tr>
                <td>
                  <ActionButton enabled={false}>Action</ActionButton>
                </td>
                <td>Plus</td>
                <td><pre><code>{"<ActionButton enabled={false}>Action</ActionButton>"}</code></pre></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Button Group</h2>
        </div>
        <div className='rs-detail-section-body'>
          <ButtonGroup>
            <Button type='primary' enabled={true}>Primary</Button>
            <Button type='secondary' enabled={true}>Secondary</Button>
            <Button type='link' enabled={true}>Cancel</Button>
            <ProcessingIndicator/>
          </ButtonGroup>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Submitting State</h3>
          <ButtonGroup>
            <Button type='primary' enabled={false}>Primary</Button>
            <Button type='secondary' enabled={false}>Secondary</Button>
            <Button type='link' enabled={false} hidden={true}>Cancel</Button>
            <ProcessingIndicator hidden={false}/>
          </ButtonGroup>
        </div>
      </div>

      <div className='rs-detail-section'>
        <div className='rs-detail-section-header'>
          <h2>Progress Bars</h2>
        </div>
        <div className='rs-detail-section-body'>
          <ProgressBar progress={25} type='solid' status='ok'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='ok'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='warning'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='warning'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='error'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='error'/>
          <br/>
          <ProgressBar progress={25} type='solid' status='info'/>
          <br/>
          <ProgressBar progress={75} type='striped' status='info'/>
        </div>
        <div className='rs-detail-section-body'>
          <h3>Fixed Width</h3>
          <ProgressBar progress={25} size='xsmall'/>
          <br/>
          <ProgressBar progress={25} size='small'/>
          <br/>
          <ProgressBar progress={25} size='medium'/>
          <br/>
          <ProgressBar progress={25} size='large'/>
          <br/>
          <ProgressBar progress={25} size='xlarge'/>
        </div>
      </div>
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
    </div>,
    document.getElementById('content')
  );
})();
