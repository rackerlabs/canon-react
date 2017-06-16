import React from 'react';
import PropTypes from 'prop-types';
import FormFieldHelp from './FormFieldHelp';
import FormFieldValidationBlock from './FormFieldValidationBlock';
import classnames from 'classnames';

const FormField = (props) => {
  const { error, success, inlineValidation, help, label, children, className, ...rest } = props;
  const classes = classnames(
    className,
    'rs-control-group',
    {
      'error': error,
      'success': success
    }
  );

  return (
    <div {...rest} className={ classes }>
      <label className="rs-control-label">{ label }</label>
      <div className="rs-controls">
        { children }
        <FormFieldHelp help={ help } />
        <FormFieldValidationBlock value={ error || success } inline={ inlineValidation } />
      </div>
    </div>
  );
};

FormField.propTypes = {
  error: PropTypes.string,
  success: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  inlineValidation: PropTypes.bool,
  help: PropTypes.node,
  label: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
};

export default FormField;
