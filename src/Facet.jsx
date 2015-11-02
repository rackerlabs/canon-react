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
    let criteriaToBeRendered, clearLinkClasses, facetToggler,
        expandedClass, sectionClasses;

    criteriaToBeRendered = this._getCriteriaToBeRendered();
    facetToggler = this._getMoreOrLessToggle(criteriaToBeRendered);

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
            { criteriaToBeRendered }
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

  _getCriteriaToBeRendered() {
    let criteriaToBeRendered, excludedSelectedCriteriaLength, excludedSelectedCriteria,
        criteria;

    criteriaToBeRendered = [];
    excludedSelectedCriteriaLength = 0;

    if (this._facetHasSelectedCriteria()) {
      excludedSelectedCriteria = this._getExcludedSelectedCriteriaElements();
      excludedSelectedCriteriaLength = excludedSelectedCriteria.length;
      criteriaToBeRendered.push(excludedSelectedCriteria);
    }

    criteria = this._getCriteriaElements(excludedSelectedCriteriaLength);
    criteriaToBeRendered.push(criteria);

    return criteriaToBeRendered;
  };

  _getCriteriaElements(selectedCriteriaLength) {
    let criteriaElements;

    criteriaElements = [];

    this.props.criteria.forEach(function (criteria, index) {
      let isSelected, hidden, numVisibleCriteria, indexOverTruncationPoint;

      numVisibleCriteria = (this.props.facetTruncationLength - 1) - selectedCriteriaLength;
      indexOverTruncationPoint = index > numVisibleCriteria;

      hidden = this.state.criteriaTruncated && indexOverTruncationPoint;

      isSelected = !!this.props.selectedCriteria[criteria.label];

      criteriaElements.push(
        <Criteria
          label={ criteria.label }
          count={ criteria.count }
          disabled={ criteria.disabled }
          isSelected={ isSelected }
          onCriteriaSelection={ this._handleCriteriaSelection.bind(this) }
          onCriteriaDeselection={ this._handleCriteriaDeselection.bind(this) }
          filter={ criteria.filter }
          hidden={ hidden }
          className={ criteria.iconClass }
          key={ criteria.label } />
      );
    }, this);

    return criteriaElements;
  };

  _getExcludedSelectedCriteriaElements() {
    let selectedToAdd, criteriaElements;

    criteriaElements = [];

    selectedToAdd = Object.keys(this.props.selectedCriteria).filter(function (selectedCriteria) {
      let criteriaExists;

      criteriaExists = this.props.criteria.some(function (criteria) {
        return criteria.label === selectedCriteria;
      });
      return !criteriaExists;
    }, this);

    selectedToAdd.forEach(function (criteriaLabel) {
      criteriaElements.push(
        <Criteria
          label={ criteriaLabel }
          count={ 0 }
          isSelected={ true }
          onCriteriaSelection={ this._handleCriteriaSelection.bind(this) }
          onCriteriaDeselection={ this._handleCriteriaDeselection.bind(this) }
          filter={ this.props.selectedCriteria[criteriaLabel].filter }
          hidden={ false }
          className={ this.props.selectedCriteria[criteriaLabel].iconClass }
          key={ criteriaLabel } />
      );
    }, this);

    return criteriaElements;
  };

  _getMoreOrLessToggle(criteriaToBeRendered) {
    let flattenedCriteria;

    flattenedCriteria = criteriaToBeRendered.reduce(function(a, b) {
      return a.concat(b);
    });

    if (flattenedCriteria.length > this.props.facetTruncationLength) {
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
  criteria: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onCriteriaSelection: React.PropTypes.func.isRequired,
  onCriteriaDeselection: React.PropTypes.func.isRequired,
  onFacetClear: React.PropTypes.func.isRequired,
  selectedCriteria: React.PropTypes.object.isRequired,
  facetTruncationLength: React.PropTypes.number
};

export default Facet;
