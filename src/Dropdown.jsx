import React from 'react';
import classNames from 'classnames';

const DROPDOWN_TYPES = {
  'primary': 'rs-nav-item rs-dropdown rs-primary-dropdown',
  'utility': 'rs-nav-item rs-dropdown rs-utility-dropdown',
  'action': 'rs-dropdown'
};

class Dropdown extends React.Component {
  render() {
    let style, classes;

    style = { float: 'left' };

    classes = classNames(
      this.props.className,
      DROPDOWN_TYPES[this.props.type]
    );

    return (
      <div className={classes} style={style}>
        <ul className='rs-dropdown-menu visible'>
          { this._children() }
        </ul>
      </div>
    );
  }

  _children() {
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { hideCallback: this.props.hideCallback });
    });
  }
}

Dropdown.defaultProps = {
  type: 'action'
};

Dropdown.propTypes = {
  type: React.PropTypes.oneOf(['primary', 'utility', 'action']),
  hideCallback: React.PropTypes.func.isRequired
};

export default Dropdown;
