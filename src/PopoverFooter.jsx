import React from 'react';

import ButtonGroup from './ButtonGroup';

class PopoverFooter extends React.Component {

  render () {
    let classes;

    classes = ['rs-popover-footer', this.props.className];
    return (
      <ButtonGroup className={classes.join(' ')}>
        {this.props.children}
      </ButtonGroup>
    );
  }
}

export default PopoverFooter;
