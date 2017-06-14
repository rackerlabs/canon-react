import classNames from 'classnames';
import EmptyOverlay from './EmptyOverlay';
import ErrorOverlay from './ErrorOverlay';
import ListTableOverlaySelector from './ListTableOverlaySelector';
import LoadingOverlay from './LoadingOverlay';
import OverlayStatus from './OverlayStatus';
import React from 'react';
import PropTypes from 'prop-types';

const SIZE_CLASSES = {
  'small': 'rs-embedded-small',
  'medium': 'rs-embedded-medium',
  'large': 'rs-embedded-large'
};

class EmbeddedListTable extends React.Component {
  render() {
    let classes;

    const {
      children,
      className,
      emptyOverlay,
      errorOverlay,
      loadingOverlay,
      overlayStatus,
      size
    } = this.props;
    const sizeClass = SIZE_CLASSES[size];

    classes = classNames(
      'rs-embedded-list-table-wrapper',
      sizeClass,
      className
    );

    return (
      <div { ...this.props } className={ classes }>
        <table className="rs-list-table rs-embedded-list-table">
          { children }
        </table>
        <ListTableOverlaySelector { ...{overlayStatus, emptyOverlay, errorOverlay, loadingOverlay} } />
      </div>
    );
  }
}

EmbeddedListTable.defaultProps = {
  overlayStatus: OverlayStatus.NONE,
  size: 'small',
  emptyOverlay: <EmptyOverlay title="Empty List" subtitle="This list is empty" message="There is no data to display" />,
  errorOverlay: <ErrorOverlay message="There was an error loading data" />,
  loadingOverlay: <LoadingOverlay />
};

EmbeddedListTable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  emptyOverlay: PropTypes.node,
  errorOverlay: PropTypes.node,
  loadingOverlay: PropTypes.node,
  overlayStatus: PropTypes.oneOf(Object.values(OverlayStatus)),
  size: PropTypes.oneOf(Object.keys(SIZE_CLASSES))
};

export default EmbeddedListTable;
