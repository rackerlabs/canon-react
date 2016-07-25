import React from 'react';
import FormFieldHelp from './FormFieldHelp';
import FormFieldValidationBlock from './FormFieldValidationBlock';
import classnames from 'classnames';

export default class FormField extends React.Component {
  render() {
    return (
      <div className={classnames('rs-control-group', { 'error': this.props.error, 'success': this.props.success })}>
        <label className="rs-control-label">{this.props.label}</label>
        <div className="rs-controls">
          {this.props.children}
          <FormFieldHelp help={this.props.help} />
          <FormFieldValidationBlock value={this.props.error || this.props.success} />
        </div>
      </div>
    );
  }
}

FormField.propTypes = {
  error: React.PropTypes.string,
  success: React.PropTypes.string,
  help: React.PropTypes.node,
  label: React.PropTypes.node.isRequired,
  children: React.PropTypes.node.isRequired
};
