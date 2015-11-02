import React from 'react';

import Facet from './Facet';

class FacetsSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCriteria: {}
    };
  }

  render() {
    let facets, itemClasses;

    facets = this._getFacetElements();
    if (!facets.length) {
      return null;
    }

    itemClasses = ['rs-facet-clear-link'];
    if (!Object.keys(this.state.selectedCriteria).length) {
      itemClasses.push('rs-hidden');
    }

    return (
      <span className='rs-facets'>
        <div className='rs-inner'>
          <div className='rs-facet-header'>
            <div className={ itemClasses.join(' ') } onClick={ this._clearAllSelections.bind(this) }>
              clear all
            </div>
            <div className='rs-facet-title'>{ this.props.facetSectionHeader }</div>
          </div>
          { facets }
        </div>
      </span>
    );
  }

  _getFacetElements() {
    let facetElements;

    facetElements = [];

    Object.keys(this.props.facetData).forEach(function (facetLabel) {
      let selectedCriteria, criteria;

      selectedCriteria = this.state.selectedCriteria[facetLabel] || {};
      criteria = this.props.facetData[facetLabel];

      if (Object.keys(criteria).length || Object.keys(selectedCriteria).length) {
        facetElements.push(
          <Facet
            label={ facetLabel }
            criteria={ criteria }
            onCriteriaSelection={ this._handleCriteriaSelection.bind(this) }
            onCriteriaDeselection={ this._handleCriteriaDeselection.bind(this) }
            selectedCriteria={ selectedCriteria }
            onFacetClear={ this._onFacetClear.bind(this) }
            facetTruncationLength={ this.props.facetTruncationLength || 5 }
            key={ facetLabel } />
        );
      }
    }, this);

    return facetElements;
  }

  _handleCriteriaSelection(facetLabel, criteriaLabel, filter, className) {
    let selectedCriteria;

    selectedCriteria = this.state.selectedCriteria;

    selectedCriteria[facetLabel] = selectedCriteria[facetLabel] || {};
    selectedCriteria[facetLabel][criteriaLabel] = this.props.facetData[facetLabel][criteriaLabel]

    this.setState({ selectedCriteria: selectedCriteria });
    if (this.props.onCriteriaSelection) {
      this.props.onCriteriaSelection(criteriaLabel, facetLabel, filter);
    }
  }

  _handleCriteriaDeselection(facetLabel, criteriaLabel) {
    let selectedCriteria;

    selectedCriteria = this.state.selectedCriteria;

    if (selectedCriteria[facetLabel]) {
      delete selectedCriteria[facetLabel][criteriaLabel];
      if (!Object.keys(selectedCriteria[facetLabel]).length) {
        delete selectedCriteria[facetLabel];
      }
    }

    this.setState({ selectedCriteria: selectedCriteria });
    if (this.props.onCriteriaDeselection) {
      this.props.onCriteriaDeselection([criteriaLabel], facetLabel);
    }
  }

  _onFacetClear(facetLabel) {
    let criteriaLabels, selectedCriteria;

    selectedCriteria = this.state.selectedCriteria;
    criteriaLabels = [];

    Object.keys(selectedCriteria[facetLabel]).forEach(function (criteriaLabel) {
      criteriaLabels.push(criteriaLabel);
    });
    delete selectedCriteria[facetLabel];

    this.setState({ selectedCriteria: selectedCriteria });
    if (this.props.onCriteriaDeselection) {
      this.props.onCriteriaDeselection(criteriaLabels);
    }
  }

  _clearAllSelections() {
    let criteriaLabels, selectedCriteria;

    criteriaLabels = [];
    selectedCriteria = this.state.selectedCriteria;

    Object.keys(selectedCriteria).forEach(function (facetLabel) {
      Object.keys(selectedCriteria[facetLabel]).forEach(function (criteriaLabel) {
        criteriaLabels.push(criteriaLabel);
      });
    });

    this.setState({ selectedCriteria: {} });
    if (this.props.onCriteriaDeselection) {
      this.props.onCriteriaDeselection(criteriaLabels);
    }
  }
}

FacetsSection.propTypes = {
  facetSectionHeader: React.PropTypes.string.isRequired,
  facetData: React.PropTypes.array.isRequired, //{label: {criteriaLabel: {count: number, className: string, filter: func}}}
  onCriteriaSelection: React.PropTypes.func,
  onCriteriaDeselection: React.PropTypes.func,
  facetTruncationLength: React.PropTypes.number
};

export default FacetsSection;
