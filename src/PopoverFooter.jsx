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

PopoverFooter.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default PopoverFooter;
