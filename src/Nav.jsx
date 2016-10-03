import React from 'react';
import classNames from 'classnames';
import PullDirection from './PullDirection';

export default class Nav extends React.Component {

  render() {
    const classes = classNames(
      'rs-nav',
      { 'rs-pull-right': this.props.pull == PullDirection.RIGHT }
    );

    return (
      <ul className={classes}>
        { this.props.children }
      </ul>
    );
  }

};

Nav.propTypes = {
  pull: React.PropTypes.oneOf(Object.values(PullDirection))
};
