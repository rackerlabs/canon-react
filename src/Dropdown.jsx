import React from 'react';

class Dropdown extends React.Component {
  render() {
    let style;

    style = {float: 'left'};
    return (
      <div className={this._classes()} style={style}>
        <ul className='rs-dropdown-menu visible'>
          {this.props.children}
        </ul>
      </div>
    );
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

Dropdown.propTypes = {
  type: React.PropTypes.oneOf(['primary', 'utility', 'action'])
};

Dropdown.defaultProps = {
  type: 'action'
};

export default Dropdown;
