import React from 'react';

class DropdownItem extends React.Component {
  render() {
    let itemClasses;

    itemClasses = ['rs-dropdown-item'];
    if (this.props.className) {
      itemClasses.push(this.props.className);
    }

    if (!this.props.enabled) {
      itemClasses.push('disabled');
    }

    return (
      <li {...this.props} className={itemClasses.join(' ')} onClick={this._handleClick.bind(this)}>
        {this._innerElement()}
      </li>
    );
  }

  _innerElement() {
    let innerElement;

    switch(this.props.type) {
      case 'link':
        innerElement = <a className='rs-dropdown-link'>{this.props.children}</a>;
        break;
      case 'category':
        innerElement = <span className='rs-dropdown-category'>{this.props.children}</span>;
        break;
      case 'text':
        innerElement = <span className='rs-dropdown-text'>{this.props.children}</span>;
        break;
    }

    return innerElement;
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
  onClick: function () {},
  hideCallback: function () {},
  type: 'link'
};

DropdownItem.propTypes = {
  enabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  hideCallback: React.PropTypes.func,
  type: React.PropTypes.oneOf(['link', 'category', 'text'])
};

export default DropdownItem;
