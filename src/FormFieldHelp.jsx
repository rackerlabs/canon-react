import React from 'react';

const FormFieldHelp = (props) => {
  return props.help ? (
    <span className="rs-help-block">{ props.help }</span>
  ) : <noscript />;
};

FormFieldHelp.propTypes = {
  help: React.PropTypes.node
};

export default FormFieldHelp;
