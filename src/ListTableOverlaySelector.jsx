import React from 'react';
import OverlayStatus from './OverlayStatus';

const ListTableOverlaySelector = ({ emptyOverlay, errorOverlay, loadingOverlay, overlayStatus }) => {
  if (overlayStatus === OverlayStatus.EMPTY) {
    return emptyOverlay;
  }

  if (overlayStatus === OverlayStatus.ERROR) {
    return errorOverlay;
  }

  if (overlayStatus === OverlayStatus.LOADING) {
    return loadingOverlay;
  }

  return <noscript />;
};

ListTableOverlaySelector.defaultProps = {
  overlayStatus: OverlayStatus.NONE
};

ListTableOverlaySelector.propTypes = {
  emptyOverlay: React.PropTypes.node,
  errorOverlay: React.PropTypes.node,
  loadingOverlay: React.PropTypes.node,
  overlayStatus: React.PropTypes.oneOf(Object.values(OverlayStatus))
};

export default ListTableOverlaySelector;
