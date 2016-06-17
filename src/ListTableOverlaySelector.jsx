import { PropTypes } from 'react';
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
  emptyOverlay: PropTypes.node,
  errorOverlay: PropTypes.node,
  loadingOverlay: PropTypes.node,
  overlayStatus: PropTypes.oneOf(Object.keys(OverlayStatus))
};

export default ListTableOverlaySelector;
