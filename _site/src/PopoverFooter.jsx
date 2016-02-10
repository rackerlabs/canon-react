import React from 'react';
import classNames from 'classnames';

import ButtonGroup from './ButtonGroup';

class PopoverFooter extends React.Component {

  render () {
    return (
      <ButtonGroup className={classNames('rs-popover-footer', this.props.className)}>
        {this.props.children}
      </ButtonGroup>
    );
  }
}

export default PopoverFooter;
