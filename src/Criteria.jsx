import React from 'react';

class Criteria extends React.Component {

  render() {
    let countText, itemClasses;

    if (this.props.count !== undefined) {
      countText = '(' + this.props.count + ')';
    }

    itemClasses = ['rs-facet-item'];
    if (this.props.isSelected) {
      itemClasses.push('selected');
    }
    if (this.props.disabled) {
      itemClasses.push('disabled');
    }
    if (this.props.hidden) {
      itemClasses.push('rs-hidden');
    }

    return (
      <span>
        <li className={ itemClasses.join(' ') } onClick={ this._handleSelectionChange.bind(this) } title={ this.props.label }>
          <span className={ this.props.iconClass } />
          <div className='rs-facet-label'>{ this.props.label }</div>
          <div className='rs-facet-count'>{ countText }</div>
        </li>
      </span>
    );
  };

  _handleSelectionChange() {
    if (!this.props.disabled && this.props.onSelectionChanged) {
      this.props.onSelectionChanged(!this.props.isSelected, this.props.id);
    }
  };
}

/** @inheritDoc */
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
