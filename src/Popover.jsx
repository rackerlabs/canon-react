var Popover = React.createClass({

  render: function () {
    return (
      <div className="rs-popover">
        // <div className="rs-popover-arrow rs-popover-arrow-left-top"></div>
        // <div className="rs-popover-arrow rs-popover-arrow-top-left"></div>
        // <div className="rs-popover-arrow rs-popover-arrow-top-right"></div>
        // <div className="rs-popover-arrow rs-popover-arrow-right-top"></div>
        <div className="rs-popover-content">
            <div className="rs-popover-body">
                {this.props.children}
            </div>
            // <div className="rs-popover-footer rs-btn-group">
            //     <div className="rs-btn rs-btn-primary">Save</div>
            //     <div className="rs-btn rs-btn-link">Cancel</div>
            // </div>
        </div>
      </div>
    );
  }
});

module.exports = Popover;
