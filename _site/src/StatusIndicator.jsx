var React = require('react');

var StatusIndicator = React.createClass({
  propTypes: {
    status: React.PropTypes.oneOf(['ok', 'error', 'processing', 'warning', 'disabled']),
    hidden: React.PropTypes.bool
  },
  getDefaultProps: function (){
    return {
      status: 'ok',
      hidden: false
    };
  },
  render: function () {
    return (
      <statusindicator {...this.props} className={this._classes()}>
        {this.props.children}
      </statusindicator>
    );
  },
  _classes: function () {
    var classes, statusIndicatorTypes;

    statusIndicatorTypes = {
      'error': 'rs-status rs-status-error',
      'processing': 'rs-status rs-status-processing',
      'warning': 'rs-status rs-status-warning',
      'ok': 'rs-status rs-status-ok',
      'disabled': 'rs-status rs-status-disabled'
    };

    classes = [];
    classes.push(this.props.className);

    if(this.props.status && statusIndicatorTypes[this.props.status]){
      classes.push(statusIndicatorTypes[this.props.status]);
    }

    if(this.props.hidden){
      classes.push('rs-hidden');
    }

    return classes.join(' ');
  }
});

module.exports = StatusIndicator;
