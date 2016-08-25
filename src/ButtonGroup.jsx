import React from 'react';
import classNames from 'classnames';

const ButtonGroup = (props) => {
  const classes = classNames(
    'rs-btn-group',
    props.className
  );

  return (
    <div { ...props } className={ classes }>
      { props.children }
    </div>
  );
};

export default ButtonGroup;
