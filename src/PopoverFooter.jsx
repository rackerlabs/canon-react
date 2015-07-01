var React = require('react');

var ButtonGroup = require('./ButtonGroup');

var PopoverFooter = React.createClass({

  render: function () {
    return (
      <ButtonGroup className='rs-popover-footer'>
        {this.props.children}
      </ButtonGroup>
    );
  }
});

module.exports = PopoverFooter;
