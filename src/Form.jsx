import React from 'react';
import classNames from 'classnames';

const SIZE_CLASSES = {
  'xsmall': 'rs-form-xsmall',
  'small': 'rs-form-small',
  'medium': 'rs-form-medium',
  'large': 'rs-form-large',
  'xlarge': 'rs-form-xlarge'
};

const Form = (props) => {
  const classes = classNames(
    {
      'rs-form-create': props.create,
      'rs-form-horizontal': props.horizontal
    },
    props.className,
    SIZE_CLASSES[props.size]
  );

  return (
    <form { ...props } className={ classes }>
      { props.children }
    </form>
  );
};

Form.propTypes = {
  create: React.PropTypes.bool,
  className: React.PropTypes.string,
  horizontal: React.PropTypes.bool,
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES)),
  children: React.PropTypes.node.isRequired
};

Form.defaultProps = {
  create: false,
  horizontal: true
};

export default Form;
