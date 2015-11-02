import React from 'react';

import Criteria from './Criteria';
import FacetToggler from './FacetToggler';

class Facet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      criteriaTruncated: true
    };
  }

  render() {
    let criteriaElements, clearLinkClasses, facetToggler,
        expandedClass, sectionClasses;

    criteriaElements = this._getCriteriaElements();
    facetToggler = this._getMoreOrLessToggle(criteriaElements);

    clearLinkClasses = ['rs-facet-clear-link'];
    if(!this._facetHasSelectedCriteria()) {
      clearLinkClasses.push('rs-hidden');
    }
    sectionClasses = ['rs-facet-section'];
    expandedClass = this.state.criteriaTruncated ? 'collapsed' : 'expanded';
    sectionClasses.push(expandedClass);

    return (
      <div className={ sectionClasses.join(' ') }>
        <div className='rs-facet-section-header'>
          <div className={ clearLinkClasses.join(' ') } onClick={ this._handleClear.bind(this) }>
            clear
          </div>
          <div className='rs-facet-section-title'>{ this.props.label }</div>
        </div>
        <div className='rs-facet-section-body'>
          <ul className='rs-facet-list'>
            { criteriaElements }
            { facetToggler }
          </ul>
        </div>
      </div>
    );
  }

  _handleCriteriaSelection(criteriaLabel, filter, iconClass) {
    this.props.onCriteriaSelection(this.props.label, criteriaLabel, filter, iconClass);
  };

  _handleCriteriaDeselection(criteriaLabel) {
    this.props.onCriteriaDeselection(this.props.label, criteriaLabel);
  };

  _handleClear() {
    this.props.onFacetClear(this.props.label);
  };

  _getCriteriaElements() {
    let criteriaElements, criteriaData;

    criteriaElements = [];
    criteriaData = Object.assign({}, this.props.criteria, this.props.selectedCriteria, this.props.criteria);

    Object.keys(criteriaData).forEach(function (criteriaLabel, index) {
      let isSelected, hidden, count, numVisibleCriteria, indexOverTruncationPoint, criteria, spliceIndex;

      numVisibleCriteria = (this.props.facetTruncationLength - 1);
      indexOverTruncationPoint = index > numVisibleCriteria;

      hidden = this.state.criteriaTruncated && indexOverTruncationPoint;

      criteria = criteriaData[criteriaLabel];
      count = !!this.props.criteria[criteriaLabel] ? criteria.count : 0;
      spliceIndex = !!this.props.criteria[criteriaLabel] ? criteriaElements.length : 0;
      isSelected = !!this.props.selectedCriteria[criteriaLabel];

      criteriaElements.splice(
        spliceIndex,
        0,
        <Criteria
          label={ criteriaLabel }
          count={ count }
          disabled={ criteria.disabled }
          isSelected={ isSelected }
          onCriteriaSelection={ this._handleCriteriaSelection.bind(this) }
          onCriteriaDeselection={ this._handleCriteriaDeselection.bind(this) }
          filter={ criteria.filter }
          hidden={ hidden }
          iconClass={ criteria.iconClass }
          key={ criteriaLabel } />
      );
    }, this);

    return criteriaElements;
  };

  _getMoreOrLessToggle(criteriaElements) {
    if (criteriaElements.length > this.props.facetTruncationLength) {
      return (
        <FacetToggler
          criteriaTruncated={ this.state.criteriaTruncated }
          onToggleChange={ this._toggleShowLess.bind(this) } />
      );
    }
    return null;
  };

  _toggleShowLess(truncationChange) {
    this.setState({criteriaTruncated: truncationChange});
  };

  _facetHasSelectedCriteria() {
    return Object.keys(this.props.selectedCriteria).length > 0;
  };
}

Facet.propTypes = {
  label: React.PropTypes.string.isRequired,
  criteria: React.PropTypes.object.isRequired,
  onCriteriaSelection: React.PropTypes.func.isRequired,
  onCriteriaDeselection: React.PropTypes.func.isRequired,
  onFacetClear: React.PropTypes.func.isRequired,
  selectedCriteria: React.PropTypes.object.isRequired,
  facetTruncationLength: React.PropTypes.number
};

export default Facet;
