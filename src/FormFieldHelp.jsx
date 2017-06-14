import React from 'react';
import PropTypes from 'prop-types';

const FormFieldHelp = (props) => {
  return props.help ? (
    <span className="rs-help-block">{ props.help }</span>
  ) : <noscript />;
};

FormFieldHelp.propTypes = {
  help: PropTypes.node
};

export default FormFieldHelp;
