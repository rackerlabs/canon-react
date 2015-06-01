var Button = require('./Button');
var ButtonGroup = require('./ButtonGroup');
var ProcessingIndicator = require('./ProcessingIndicator');
var ProgressBar = require('./ProgressBar');

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
    </div>,
    document.getElementById('content')
  );
})();
