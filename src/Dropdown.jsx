import React from 'react';

class Dropdown extends React.Component {
  render() {
    let style;

    style = { float: 'left' };
    return (
      <div className={this._classes()} style={style}>
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

  _classes() {
    let classes, dropdownTypes;

    dropdownTypes = {
      'primary': 'rs-nav-item rs-dropdown rs-primary-dropdown',
      'utility': 'rs-nav-item rs-dropdown rs-utility-dropdown',
      'action': 'rs-dropdown'
    };

    classes = [];
    classes.push(this.props.className);

    if (this.props.type && dropdownTypes[this.props.type]) {
      classes.push(dropdownTypes[this.props.type]);
    }

    return classes.join(' ');
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
