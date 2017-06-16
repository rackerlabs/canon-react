import React from 'react';
import classNames from 'classnames';

const ButtonGroup = (props) => {
  const { className, children, ...rest } = props;
  const classes = classNames(
    'rs-btn-group',
    className
  );

  return (
    <div { ...rest } className={ classes }>
      { children }
    </div>
  );
};

export default ButtonGroup;
