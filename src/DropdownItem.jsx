import React from 'react';
import classNames from 'classnames';

const ITEM_TYPE = {
  'link': 'rs-dropdown-link',
  'category': 'rs-dropdown-category',
  'text': 'rs-dropdown-text'
};

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    let itemClasses, itemContentClass, content;

    itemContentClass = ITEM_TYPE[this.props.type];

    if (this.props.type === 'link') {
      content = <a className={ itemContentClass }>{ this.props.children }</a>;
    } else {
      content = <span className={ itemContentClass }>{ this.props.children }</span>;
    }

    itemClasses = classNames(
      'rs-dropdown-item',
      this.props.className,
      { 'disabled': !this.props.enabled }
    );

    return (
      <li { ...this.props } className={ itemClasses } onClick={ this._handleClick }>
        { content }
      </li>
    );
  }

  _handleClick(e) {
    if (this.props.enabled) {
      this.props.onClick(e);
      this.props.hideCallback();
      return e;
    }
    e.preventDefault();
  }
}

DropdownItem.defaultProps = {
  enabled: true,
  onClick: () => {},
  hideCallback: () => {},
  type: 'link'
};

DropdownItem.propTypes = {
  enabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  hideCallback: React.PropTypes.func,
  type: React.PropTypes.oneOf(Object.keys(ITEM_TYPE))
};

export default DropdownItem;
