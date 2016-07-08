import React from 'react';
import classNames from 'classnames';

import ButtonGroup from './ButtonGroup';

const PopoverFooter = (props) => (
  <ButtonGroup className={ classNames('rs-popover-footer', props.className) }>
    { props.children }
  </ButtonGroup>
);

export default PopoverFooter;
