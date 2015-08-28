import React from 'react';

import ButtonGroup from './ButtonGroup';

class PopoverFooter extends React.Component {

  render () {
    return (
      <ButtonGroup className='rs-popover-footer'>
        {this.props.children}
      </ButtonGroup>
    );
  }
}

export default PopoverFooter;
