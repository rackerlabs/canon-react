import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SIZE_CLASSES = {
  'xsmall': 'rs-form-xsmall',
  'small': 'rs-form-small',
  'medium': 'rs-form-medium',
  'large': 'rs-form-large',
  'xlarge': 'rs-form-xlarge'
};

const Form = (props) => {
  const { create, horizontal, ...rest } = props;
  const classes = classNames(
    {
      'rs-form-create': create,
      'rs-form-horizontal': horizontal
    },
    props.className,
    SIZE_CLASSES[props.size]
  );

  return (
    <form { ...rest } className={ classes }>
      { rest.children }
    </form>
  );
};

Form.propTypes = {
  create: PropTypes.bool,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZE_CLASSES)),
  children: PropTypes.node.isRequired
};

Form.defaultProps = {
  create: false,
  horizontal: true
};

export default Form;
