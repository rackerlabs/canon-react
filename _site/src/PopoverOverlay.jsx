var React = require('react');

var PopoverOverlay = React.createClass({

  propTypes: {
    placement: React.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left', 'center'])
  },

  getDefaultProps: function () {
    return {
      placement: 'right'
    };
  },

  _arrowPlacement: function () {
    var arrowClasses, arrowPositions;

    arrowPositions = {
      'right': 'rs-popover-arrow-left-top',
      'bottom-right': 'rs-popover-arrow-top-left',
      'left': 'rs-popover-arrow-right-top',
      'bottom-left': 'rs-popover-arrow-top-right'
    };
    arrowClasses = ['rs-popover-arrow'];

    arrowClasses.push(arrowPositions[this.props.placement]);

    return arrowClasses.join(' ');
  },

  _shouldShowArrow: function () {
    return this.props.placement !== 'center';
  },

  render: function () {
    if (this._shouldShowArrow()) {
      return (
        <div className={this.props.className}>
          <div className={this._arrowPlacement()}></div>
          <div className='rs-popover-content'>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div className={this.props.className}>
          <div className='rs-popover-content'>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
});

module.exports = PopoverOverlay;
