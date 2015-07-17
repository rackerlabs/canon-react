var Button = require('./Button');

var ActionButton = React.createClass({
  propTypes: {
    enabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    hidden: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      enabled: true,
      hidden: false,
      type: 'action'
    };
  },

  render: function () {
    return (
      <Button {...this.props}>
        <span className={"rs-cog"}></span> {this.props.children} <span className={"rs-caret"}></span>
      </Button>
    );
  }
});

module.exports = ActionButton;
