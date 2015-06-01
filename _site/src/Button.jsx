var Button = React.createClass({
  propTypes: {
    enabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      enabled: true,
      type: 'secondary',
      hidden: false
    };
  },

  render: function () {
    return (
      <button {...this.props} className={this._classes()} onClick={this._handleClick}>
        {this.props.children}
      </button>
    );
  },

  _classes: function () {
    var classes, buttonTypes;

    buttonTypes = {
      'primary': 'rs-btn rs-btn-primary',
      'link': 'rs-btn rs-btn-link',
      'login': 'rs-btn rs-btn-login',
      'secondary': 'rs-btn',
      'cog': 'rs-cog',
      'delete': 'rs-delete',
      'edit': 'rs-edit',
      'plus': 'rs-plus'
    };

    classes = [];
    classes.push(this.props.className);

    if (!this.props.enabled) {
      classes.push('disabled');
    }

    if (this.props.type && buttonTypes[this.props.type]) {
      classes.push(buttonTypes[this.props.type]);
    }

    if (this.props.hidden) {
      classes.push('rs-hidden');
    }

    return classes.join(' ');
  },

  _handleClick: function (e) {
    if (this.props.enabled) {
      this.props.onClick(e);
      return e;
    }
    e.preventDefault();
  }
});

module.exports = Button;
