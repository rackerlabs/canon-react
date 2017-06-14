import React from 'react';
import PropTypes from 'prop-types';
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
    const { canonStyle, enabled, ...rest } = this.props;

    classes = classNames(
      this.props.className,
      { 'disabled': !enabled },
      BUTTON_TYPES[canonStyle],
      { 'rs-hidden': this.props.hidden }
    );

    if (canonStyle === 'action') {
      return (
        <button {...rest} className={classes} onClick={this._handleClick.bind(this)}>
          <span className='rs-cog'></span> {this.props.children} <span className='rs-caret'></span>
        </button>
      );
    }

    return (
      <button {...rest} className={classes} onClick={this._handleClick.bind(this)}>
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
  enabled: PropTypes.bool,
  onClick: PropTypes.func,
  canonStyle: PropTypes.oneOf(Object.keys(BUTTON_TYPES)),
  hidden: PropTypes.bool
};

Button.defaultProps = {
  enabled: true,
  canonStyle: 'secondary',
  hidden: false
};

export default Button;
