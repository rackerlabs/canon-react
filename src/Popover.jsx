var Popover = React.createClass({

  propTypes: {
    placement: React.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left'])
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

  render: function () {
    return (
      <div className="rs-popover">
        <div className={this._arrowPlacement()}></div>
        <div className="rs-popover-content">
            {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Popover;

// <div className="rs-popover-arrow rs-popover-arrow-left-top"></div>
// <div className="rs-popover-arrow rs-popover-arrow-top-left"></div>
// <div className="rs-popover-arrow rs-popover-arrow-top-right"></div>
// <div className="rs-popover-arrow rs-popover-arrow-right-top"></div>

// <div className="rs-popover-footer rs-btn-group">
//     <div className="rs-btn rs-btn-primary">Save</div>
//     <div className="rs-btn rs-btn-link">Cancel</div>
// </div>
