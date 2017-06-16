import React from 'react';
import PropTypes from 'prop-types';

const ErrorIndicator = (props) => {
  return props.value ? (
    <div className="rs-status-error">
      { props.value }
    </div>
  ) : <noscript />;
};

ErrorIndicator.propTypes = {
  value: PropTypes.node
};

export default ErrorIndicator;
