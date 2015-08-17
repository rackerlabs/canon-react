var React = require('react');

var ProcessingIndicator = React.createClass({
  propTypes: {
    hidden: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return { hidden: true };
  },

  render: function () {
    var classes;

    classes = 'rs-processing-indicator';

    if (this.props.hidden) {
      classes += ' rs-hidden';
    }

    return (
      <i className={classes}></i>
    );
  }
});

module.exports = ProcessingIndicator;
