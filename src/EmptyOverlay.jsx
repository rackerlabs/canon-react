import ListTableOverlay from './ListTableOverlay';
import React from 'react';

const EmptyOverlay = ({ title, subtitle, message }) => (
  <ListTableOverlay { ...{ title, subtitle, message } } />
);

EmptyOverlay.propTypes = {
  title: React.PropTypes.node.isRequired,
  subtitle: React.PropTypes.node,
  message: React.PropTypes.node
};

export default EmptyOverlay;
