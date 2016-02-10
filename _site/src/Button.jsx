import React from 'react';
import classNames from 'classnames';

const BUTTON_TYPES = {
  'action': 'rs-btn rs-btn-action',
  'primary': 'rs-btn rs-btn-primary',
  'link': 'rs-btn rs-btn-link',
  'login': 'rs-btn rs-btn-login',
  'secondary': 'rs-btn',
  'cog': 'rs-cog',
  'delete': 'rs-delete',
  'edit': 'rs-edit',
  'plus': 'rs-plus'
};

class Button extends React.Component {
  render() {
    let classes;

    classes = classNames(
      this.props.className,
      { 'disabled': !this.props.enabled },
      BUTTON_TYPES[this.props.type],
      { 'rs-hidden': this.props.hidden }
    );

    if (this.props.type === 'action') {
      return (
        <button {...this.props} className={classes} onClick={this._handleClick.bind(this)}>
          <span className='rs-cog'></span> {this.props.children} <span className='rs-caret'></span>
        </button>
      );
    }

    return (
      <button {...this.props} className={classes} onClick={this._handleClick.bind(this)}>
        {this.props.children}
      </button>
    );
  }

  _handleClick(e) {
    if (this.props.enabled) {
      this.props.onClick(e);
      return e;
    }
    e.preventDefault();
  }
}

Button.propTypes = {
  enabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  type: React.PropTypes.oneOf([
    'action',
    'primary',
    'link',
    'login',
    'secondary',
    'cog',
    'delete',
    'edit',
    'plus'
  ]),
  hidden: React.PropTypes.bool
};

Button.defaultProps = {
  enabled: true,
  type: 'secondary',
  hidden: false
};

export default Button;
