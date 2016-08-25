import classNames from 'classnames';

const CheckboxColumnHeader = (props) => {
  const classes = classNames(
    'rs-table-checkbox',
    props.className
  );

  return (
    <th { ...props } className={ classes } />
  );
};

export default CheckboxColumnHeader;
