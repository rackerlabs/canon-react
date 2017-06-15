import React from 'react';
import classNames from 'classnames';

const StatusColumnHeader = (props) => {
  const { className, ...rest } = props;
  const classes = classNames(
    'rs-table-status',
    className
  );

  return (
    <th { ...rest } className={ classes } />
  );
};

export default StatusColumnHeader;
