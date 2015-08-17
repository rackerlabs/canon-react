var React = require('react');

var ButtonGroup = React.createClass({
  render: function () {
    var classes;

    classes = ['rs-btn-group'];
    if (this.props.className) {
      classes.push(this.props.className);
    }

    return (
      <div {...this.props} className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;
