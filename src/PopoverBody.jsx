var React = require('react');

var PopoverBody = React.createClass({

  render: function () {
    return (
      <div className='rs-popover-body'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = PopoverBody;
