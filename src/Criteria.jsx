import React from 'react';

class Criteria extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let countText, itemClasses;

    countText = '(' + this.props.count + ')';
    itemClasses = ['rs-facet-item'];
    if (this.props.isSelected) {
      itemClasses.push('selected');
    }
    if (!this.props.count) {
      itemClasses.push('disabled');
    }
    if (this.props.hidden) {
      itemClasses.push('rs-hidden');
    }

    return (
      <span>
        <li className={ itemClasses.join(' ') } onClick={ this._handleSelectionChange.bind(this) } title={ this.props.label }>
          <span className={ this.props.className } />
          <div className='rs-facet-label'>{ this.props.label }</div>
          <div className='rs-facet-count'>{ countText }</div>
        </li>
      </span>
    );
  };


  _handleSelectionChange() {
    if (this.props.isSelected) {
      this.props.onCriteriaDeselection(this.props.label);
    } else {
      this.props.onCriteriaSelection(this.props.label, this.props.filter, this.props.className);
    }
  };
}

/** @inheritDoc */
Criteria.propTypes = {
  label: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onCriteriaSelection: React.PropTypes.func.isRequired,
  onCriteriaDeselection: React.PropTypes.func.isRequired,
  filter: React.PropTypes.object,
  hidden: React.PropTypes.bool.isRequired
};

export default Criteria;
