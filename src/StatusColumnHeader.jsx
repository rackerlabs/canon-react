import classNames from 'classnames';

const StatusColumnHeader = (props) => {
  const classes = classNames(
    'rs-table-status',
    props.className
  );

  return (
    <th { ...props } className={ classes } />
  );
};

export default StatusColumnHeader;
