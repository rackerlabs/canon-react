import React from 'react';
import FormFieldHelp from './FormFieldHelp';
import FormFieldValidationBlock from './FormFieldValidationBlock';
import classnames from 'classnames';

const FormField = (props) => {
  const classes = classnames(
    'rs-control-group',
    {
      'error': props.error,
      'success': props.success
    }
  );

  return (
    <div className={ classes }>
      <label className="rs-control-label">{ props.label }</label>
      <div className="rs-controls">
        { props.children }
        <FormFieldHelp help={ props.help } />
        <FormFieldValidationBlock value={ props.error || props.success } />
      </div>
    </div>
  );
};

FormField.propTypes = {
  error: React.PropTypes.string,
  success: React.PropTypes.string,
  help: React.PropTypes.node,
  label: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired
};

export default FormField;
