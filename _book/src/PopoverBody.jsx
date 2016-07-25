import React from 'react';
import classNames from 'classnames';

const PopoverBody = (props) => (
  <div className={ classNames('rs-popover-body', props.className) }>
    { props.children }
  </div>
);

export default PopoverBody;
