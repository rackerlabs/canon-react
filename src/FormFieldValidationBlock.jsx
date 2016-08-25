import React from 'react';
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
  value: React.PropTypes.node,
  inline: React.PropTypes.bool
};

export default FormFieldValidationBlock;
