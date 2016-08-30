import ListTableOverlay from './ListTableOverlay';
import React from 'react';

const ErrorOverlay = ({ message }) => (
  <ListTableOverlay
    className="rs-table-overlay-error"
    message={ <span><i className="rs-icon-error-indicator"></i>{ message }</span> }
  />
);

ErrorOverlay.propTypes = {
  message: React.PropTypes.node.isRequired
};

export default ErrorOverlay;
