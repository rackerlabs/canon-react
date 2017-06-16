import React from 'react';
import PropTypes from 'prop-types';
import ListTableOverlaySelector from './ListTableOverlaySelector';
import EmptyOverlay from './EmptyOverlay';
import ErrorOverlay from './ErrorOverlay';
import LoadingOverlay from './LoadingOverlay';
import OverlayStatus from './OverlayStatus';

class ListTable extends React.Component {
  render() {
    const {
      children,
      emptyOverlay,
      errorOverlay,
      loadingOverlay,
      overlayStatus,
      ...rest
    } = this.props;

    return (
      <div { ...rest } >
        <table className="rs-list-table">
          { children }
        </table>
        <ListTableOverlaySelector { ...{ overlayStatus, emptyOverlay, errorOverlay, loadingOverlay } } />
      </div>
    );
  }
}

ListTable.defaultProps = {
  emptyOverlay: <EmptyOverlay title="Empty List" subtitle="This list is empty" message="There is no data to display" />,
  errorOverlay: <ErrorOverlay message="There was an error loading data" />,
  loadingOverlay: <LoadingOverlay />,
  overlayStatus: OverlayStatus.NONE
};

ListTable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  emptyOverlay: PropTypes.node,
  errorOverlay: PropTypes.node,
  loadingOverlay: PropTypes.node,
  overlayStatus: PropTypes.oneOf(Object.values(OverlayStatus))
};

export default ListTable;
