import React from 'react';
import classNames from 'classnames';

const CheckboxColumnHeader = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(
    'rs-table-checkbox',
    className
  );

  return (
    <th { ...rest } className={ classes } />
  );
};

export default CheckboxColumnHeader;
