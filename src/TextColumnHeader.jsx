import React from 'react';
import SortDirection from './SortDirection';
import classNames from 'classnames';

class TextColumnHeader extends React.Component {
  render() {
    let classes;
    const { label, sortable, direction, className } = this.props;

    if (sortable) {
      classes = classNames(
        'rs-table-sort',
        {
          'rs-table-sort-asc': direction === SortDirection.ASCENDING,
          'rs-table-sort-desc': direction === SortDirection.DESCENDING
        },
        className
      );

      return (
        <th>
          <a href="#" onClick={ (ev) => { this._handleClick(ev); } } className={ classes }>
            <span className="rs-table-sort-text">{ label }</span>
            <span className="rs-table-sort-indicator"></span>
          </a>
        </th>
      );
    }

    return (
      <th>
        <span className={ classNames('rs-table-sort-text', className) }>{ label }</span>
      </th>
    );
  }

  _handleClick(ev) {
    const { direction } = this.props;

    if (direction === SortDirection.ASCENDING) {
      this.props.onSort(SortDirection.DESCENDING);
    } else {
      this.props.onSort(SortDirection.ASCENDING);
    }

    ev.preventDefault();
    ev.stopPropagation();
  }
}

TextColumnHeader.defaultProps = {
  label: '',
  sortable: false,
  onSort: () => {}
};

TextColumnHeader.propTypes = {
  label: React.PropTypes.string.isRequired,
  sortable: React.PropTypes.bool.isRequired,
  onSort: React.PropTypes.func.isRequired,
  direction: React.PropTypes.oneOf(Object.values(SortDirection))
};

export default TextColumnHeader;
