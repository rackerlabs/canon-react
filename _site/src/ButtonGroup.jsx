import React from 'react';
import classNames from 'classnames';

class ButtonGroup extends React.Component {
  render() {
    let classes;

    classes = classNames(
      'rs-btn-group',
      this.props.className
    );

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default ButtonGroup;
