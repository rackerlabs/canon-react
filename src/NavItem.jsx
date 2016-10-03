import React from 'react';
import classNames from 'classnames';

export default class NavItem extends React.Component {

  render() {
    const classes = classNames(
      'rs-nav-item',
      this.props.className
    );

    return (
      <li className={classes}>
        { this.props.children }
      </li>
    );
  }

};
