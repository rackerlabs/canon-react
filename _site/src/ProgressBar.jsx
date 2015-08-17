var React = require('react');

var SizeClasses = {
  'xsmall': 'rs-progress-xsmall',
  'small': 'rs-progress-small',
  'medium': 'rs-progress-medium',
  'large': 'rs-progress-large',
  'xlarge': 'rs-progress-xlarge',
};

var StatusClasses = {
  'ok': 'rs-status-ok',
  'error': 'rs-status-error',
  'warning': 'rs-status-warning',
  'info': 'rs-status-info'
};

var TypeClasses = {
  'solid': 'rs-bar-solid',
  'striped': 'rs-bar-striped'
};

var ProgressBar = React.createClass({
  propTypes: {
    progress: React.PropTypes.number,
    status: React.PropTypes.string,
    type: React.PropTypes.string,
    size: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      progress: 0,
      status: 'ok',
      type: 'solid'
    };
  },

  _getSizeClass: function () {
    var sizeClass;

    sizeClass = 'rs-progress';

    if (SizeClasses[this.props.size]) {
      sizeClass += ' ' + SizeClasses[this.props.size];
    }
    return sizeClass;
  },

  _getStatusClass: function () {
    var statusClass;

    statusClass = ['rs-bar'];
    statusClass.push(StatusClasses[this.props.status]);
    statusClass.push(TypeClasses[this.props.type]);
    return statusClass.join(' ');
  },

  render: function () {
    var style, width;

    width = this.props.progress + '%';
    style = { 'width': width };

    return (
      <div className={this._getSizeClass()}>
        <div className='rs-progress-inner'>
          <div className='rs-segment' style={style}>
            <div className={this._getStatusClass()}></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ProgressBar;
