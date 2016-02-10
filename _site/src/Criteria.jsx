import React from 'react';
import classNames from 'classnames';

class Criteria extends React.Component {
  render() {
    let countText, itemClasses;

    if (this.props.count !== undefined) {
      countText = '(' + this.props.count + ')';
    }

    itemClasses = classNames(
      'rs-facet-item',
      { 'selected': this.props.isSelected },
      { 'disabled': this.props.disabled },
      { 'rs-hidden': this.props.hidden}
    );

    return (
      <span>
        <li className={ itemClasses } onClick={ this._handleSelectionChange.bind(this) } title={ this.props.label }>
          <span className={ this.props.iconClass } />
          <div className='rs-facet-label'>{ this.props.label }</div>
          <div className='rs-facet-count'>{ countText }</div>
        </li>
      </span>
    );
  }

  _handleSelectionChange() {
    if (!this.props.disabled && this.props.onSelectionChanged) {
      this.props.onSelectionChanged(!this.props.isSelected, this.props.id);
    }
  }
}

Criteria.propTypes = {
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  count: React.PropTypes.number,
  iconClass: React.PropTypes.string,
  isSelected: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  hidden: React.PropTypes.bool,
  onSelectionChanged: React.PropTypes.func
};

export default Criteria;
