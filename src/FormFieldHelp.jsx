import React from 'react';

export default class FormFieldHelp extends React.Component {
  render() {
    return this.props.help ? (
      <span className="rs-help-block">{this.props.help}</span>
    ) : null;
  }
}

FormFieldHelp.propTypes = {
  help: React.PropTypes.node
};
