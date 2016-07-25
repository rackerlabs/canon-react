import React from 'react';
import classNames from 'classnames';

const ITEM_TYPE = {
  'link': <a className='rs-dropdown-link' />,
  'category': <span className='rs-dropdown-category' />,
  'text': <span className='rs-dropdown-text' />
};

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
  }

  render() {
    const itemClasses = classNames(
      'rs-dropdown-item',
      this.props.className,
      { 'disabled': !this.props.enabled }
    );

    const innerElement = React.cloneElement(
      ITEM_TYPE[this.props.type],
      { children: this.props.children }
    );

    return (
      <li { ...this.props } className={ itemClasses } onClick={ this._handleClick }>
        { innerElement }
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
