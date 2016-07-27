import React from 'react';

const ErrorIndicator = (props) => {
  return props.value ? (
    <div className="rs-status-error">
      { props.value }
    </div>
  ) : <noscript />;
};

ErrorIndicator.propTypes = {
  value: React.PropTypes.node
};

export default ErrorIndicator;
