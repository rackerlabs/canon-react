import React from 'react';
import PropTypes from 'prop-types';
import ListTableOverlay from './ListTableOverlay';

const EmptyOverlay = ({ title, subtitle, message }) => (
  <ListTableOverlay { ...{ title, subtitle, message } } />
);

EmptyOverlay.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  message: PropTypes.node
};

export default EmptyOverlay;
