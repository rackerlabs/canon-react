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

  _handleSelectionChanged(isSelected, criteriaLabel) {
    this.props.onSelectionChanged(isSelected, this.props.label, criteriaLabel);
  };

  _handleClear() {
    this.props.onFacetClear(this.props.label);
  };

  _getCriteriaElements() {
    let criteriaElements;

    criteriaElements = [];

    Object.keys(this.props.selectedCriteria).forEach(function (criteriaLabel) {
      let criteria;

      if (!this.props.criteria[criteriaLabel]) {
        criteria = this.props.selectedCriteria[criteriaLabel];
        criteria.count = 0;
        criteriaElements.push(this._getCriteriaElement(criteriaLabel, criteria, criteriaElements.length));
      }
    }, this);

    Object.keys(this.props.criteria).forEach(function (criteriaLabel) {
      criteriaElements.push(this._getCriteriaElement(criteriaLabel, this.props.criteria[criteriaLabel], criteriaElements.length));
    }, this);

    return criteriaElements;
  };

  _getCriteriaElement(criteriaLabel, criteria, index) {
    let isSelected, hidden, numVisibleCriteria, indexOverTruncationPoint;

    numVisibleCriteria = (this.props.facetTruncationLength - 1);
    indexOverTruncationPoint = index > numVisibleCriteria;
    hidden = this.state.criteriaTruncated && indexOverTruncationPoint;

    isSelected = !!this.props.selectedCriteria[criteriaLabel];

    return (
      <Criteria
        label={ criteriaLabel }
        count={ criteria.count }
        disabled={ criteria.disabled }
        isSelected={ isSelected }
        onSelectionChanged={ this._handleSelectionChanged.bind(this) }
        filter={ criteria.filter }
        hidden={ hidden }
        iconClass={ criteria.iconClass }
        key={ criteriaLabel } />
    );
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
  onSelectionChanged: React.PropTypes.func.isRequired,
  onFacetClear: React.PropTypes.func.isRequired,
  selectedCriteria: React.PropTypes.object.isRequired,
  facetTruncationLength: React.PropTypes.number
};

export default Facet;
