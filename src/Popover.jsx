var Popover = React.createClass({

  getDefaultProps: function () {
    return {
      position: 'left-top'
    };
  },

  _arrowPosition: function () {
    var arrowClasses, arrowPositions;

    arrowPositions = {
      'left-top': 'rs-popover-arrow-left-top',
      'top-left': 'rs-popover-arrow-top-left',
      'right-top': 'rs-popover-arrow-right-top',
      'top-right': 'rs-popover-arrow-top-right'
    };
    arrowClasses = ['rs-popover-arrow'];

    arrowClasses.push(arrowPositions[this.props.position]);

    return arrowClasses.join(' ');
  },

  render: function () {
    return (
      <div className="rs-popover">
        <div className={this._arrowPosition()}></div>
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
