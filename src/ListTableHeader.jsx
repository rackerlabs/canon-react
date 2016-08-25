import { Component, PropTypes } from 'react';
import SortDirection from './SortDirection';

class ListTableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>{ this._cloneChildren() }</tr>
      </thead>
    );
  }

  _cloneChildren() {
    const { children, direction, sortColumn } = this.props;

    return React.Children.map(children, (child) => {
      return React.cloneElement(child,
        {
          onSort: this._getSortHandler(child),
          sortKey: child.props.columnId,
          direction: (child.props.columnId === sortColumn) ? direction : null
        }
      );
    });
  }

  _getSortHandler(child) {
    const { onSort } = this.props;

    return (direction) => {
      onSort(direction, child.props.columnId);
    };
  }
}

ListTableHeader.defaultProps = {
  onSort: () => {}
};

ListTableHeader.propTypes = {
  onSort: PropTypes.func,
  sortColumn: PropTypes.string,
  direction: PropTypes.oneOf(Object.values(SortDirection))
};

export default ListTableHeader;
