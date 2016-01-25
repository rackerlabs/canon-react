import React from 'react';
import classNames from 'classnames';

class PopoverBody extends React.Component {

  render() {
    return (
      <div className={classNames('rs-popover-body', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export default PopoverBody;
