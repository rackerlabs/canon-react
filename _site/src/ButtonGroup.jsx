var ButtonGroup = React.createClass({
  render: function () {
    return (
      <div {...this.props} className='rs-btn-group'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;
