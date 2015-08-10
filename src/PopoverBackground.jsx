var React = require('react');

var PopoverBackground = React.createClass({

  propTypes: {
    onRequestClose: React.PropTypes.func
  },
  
  render: function () {
    var style;

    style = {
      'position': 'fixed',
      'left': 0,
      'top': 0,
      'width': '100%',
      'height': '100%',
      'zIndex': 999
    };

    return (<div className='rs-popover-background-overlay' onClick={this.props.onRequestClose} style={style}></div>);
  }
});

module.exports = PopoverBackground;
