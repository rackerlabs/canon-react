import React from 'react';

export default class FormFieldValidationBlock extends React.Component {
  render() {
    return this.props.value ? (
      <span className="rs-validation-block">
        <i className="rs-validation-indicator"></i> {this.props.value}
      </span>
    ) : null;
  }
}

FormFieldValidationBlock.propTypes = {
  value: React.PropTypes.node
};
