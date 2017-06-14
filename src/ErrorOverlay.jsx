import React from 'react';
import PropTypes from 'prop-types';
import ListTableOverlay from './ListTableOverlay';

const ErrorOverlay = ({ message }) => (
  <ListTableOverlay
    className="rs-table-overlay-error"
    message={ <span><i className="rs-icon-error-indicator"></i>{ message }</span> }
  />
);

ErrorOverlay.propTypes = {
  message: PropTypes.node.isRequired
};

export default ErrorOverlay;
