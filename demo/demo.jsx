var Button = require('../src/Button');
var ButtonGroup = require('../src/ButtonGroup');
var React = require('react');

(function (Button, React) {
  React.render(
    <div>
      <ButtonGroup>
        <Button type='primary' enabled={true}>Primary</Button>
        <Button type='secondary' enabled={true}>Secondary</Button>
        <Button type='login' enabled={true}>Login</Button>
        <Button type='link' enabled={true}>Cancel</Button>
        <Button type='delete' enabled={true}>Delete</Button>
        <Button type='edit' enabled={true}>Edit</Button>
        <Button type='plus' enabled={true}>Plus</Button>
      </ButtonGroup>
    </div>,
    document.getElementById('content')
  );
})(Button, React);
