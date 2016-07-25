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
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    let classes;

    classes = classNames(
      this.props.className,
      { 'disabled': !this.props.enabled },
      BUTTON_TYPES[this.props.canonStyle],
      { 'rs-hidden': this.props.hidden }
    );

    const isActionButton = this.props.canonStyle === 'action';

    return (
      <button { ...this.props } className={ classes } onClick={ this._handleClick }>
        { isActionButton ? [ <span className='rs-cog'/>, ' ' ] : null }
        { this.props.children }
        { isActionButton ? [ ' ', <span className='rs-caret'/> ] : null }
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
  canonStyle: React.PropTypes.oneOf(Object.keys(BUTTON_TYPES)),
  hidden: React.PropTypes.bool
};

Button.defaultProps = {
  enabled: true,
  canonStyle: 'secondary',
  hidden: false
};

export default Button;
