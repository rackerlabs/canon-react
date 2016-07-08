import React from 'react';

const FormFieldValidationBlock = (props) => {
  return props.value ? (
    <span className="rs-validation-block">
      <i className="rs-validation-indicator"></i> { props.value }
    </span>
  ) : <noscript />;
};

FormFieldValidationBlock.propTypes = {
  value: React.PropTypes.node
};

export default FormFieldValidationBlock;
