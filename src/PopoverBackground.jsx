import React from 'react';
import PropTypes from 'prop-types';

const PopoverBackground = (props) => {
  let style = {
    'position': 'fixed',
    'left': 0,
    'top': 0,
    'width': '100%',
    'height': '100%',
    'zIndex': 999
  };

  if (props.isModal) {
    style['backgroundColor'] = 'rgba(0, 0, 0, 0.5)';
  }

  return <div className='rs-popover-background-overlay' onClick={ props.onRequestClose } style={ style } />;
};

PopoverBackground.propTypes = {
  isModal: PropTypes.bool,
  onRequestClose: PropTypes.func
};

export default PopoverBackground;
