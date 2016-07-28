import { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ListTableOverlaySelector from './ListTableOverlaySelector';
import OverlayStatus from './OverlayStatus';

const SIZE_CLASSES = {
  'small': 'rs-embedded-small',
  'medium': 'rs-embedded-medium',
  'large': 'rs-embedded-large'
};

class EmbeddedListTable extends Component {
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
  size: 'small'
};

EmbeddedListTable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  emptyOverlay: PropTypes.node,
  errorOverlay: PropTypes.node,
  loadingOverlay: PropTypes.node,
  overlayStatus: PropTypes.oneOf(Object.keys(OverlayStatus)),
  size: PropTypes.oneOf(Object.keys(SIZE_CLASSES))
};

export default EmbeddedListTable;
