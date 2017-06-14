import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FormFieldValidationBlock = (props) => {
  const classes = classnames(
    {
      'rs-validation-block': !props.inline,
      'rs-validation-inline': props.inline
    }
  );
  const style = {
    'vertical-align': 'text-top'
  };
  return props.value ? (
    <div className={ classes } style={ style }>
      <i className="rs-validation-indicator"></i> { props.value }
    </div>
  ) : <noscript />;
};

FormFieldValidationBlock.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  inline: PropTypes.bool
};

export default FormFieldValidationBlock;
