import React from 'react';
import FormFieldHelp from './FormFieldHelp';
import FormFieldValidationBlock from './FormFieldValidationBlock';
import classnames from 'classnames';

const FormField = (props) => {
  const { error, success, label, children, help, inlineValidation, className, ...rest } = props;
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
  error: React.PropTypes.string,
  success: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
  inlineValidation: React.PropTypes.bool,
  help: React.PropTypes.node,
  label: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired
};

export default FormField;
