import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FacetsSection extends React.Component {
  constructor(props) {
    super(props);

    this._handleClearAll = this._handleClearAll.bind(this);
    this._handleSelectionChanged = this._handleSelectionChanged.bind(this);
    this._handleFacetClear = this._handleFacetClear.bind(this);
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    const facets = this._getFacetElements();

    const itemClasses = classNames(
      'rs-facet-clear-link',
      { 'rs-hidden': !Object.keys(this.props.selectedCriteria).length }
    );

    return (
      <span className='rs-facets'>
        <div className='rs-inner'>
          <div className='rs-facet-header'>
            <div className={ itemClasses } onClick={ this._handleClearAll }>
              clear all
            </div>
            <div className='rs-facet-title'>{ this.props.sectionHeader }</div>
          </div>
          { facets }
        </div>
      </span>
    );
  }

  _getFacetElements() {
    return React.Children.map(this.props.children, (child) => {
      let selectedCriteria;

      selectedCriteria = this.props.selectedCriteria[child.props.id] || {};
      return React.cloneElement(
        child,
        {
          selectedCriteria,
          onSelectionChanged: this._handleSelectionChanged,
          onFacetClear: this._handleFacetClear
        }
      );
    }, this);
  }

  _handleSelectionChanged(isSelected, facetId, criteriaId) {
    if (isSelected) {
      this._handleCriteriaSelection(facetId, criteriaId);
    } else {
      this._handleCriteriaDeselection(facetId, criteriaId);
    }
  }

  _handleCriteriaSelection(facetId, criteriaId) {
    let selectedCriteria;

    selectedCriteria = this._cloneSelectedCriteria();

    selectedCriteria[facetId] = selectedCriteria[facetId] || {};
    selectedCriteria[facetId][criteriaId] = true;

    this.props.onCriteriaSelection(facetId, criteriaId);
    this.props.onSelectionChanged(selectedCriteria);
  }

  _handleCriteriaDeselection(facetId, criteriaId) {
    let selectedCriteria;

    selectedCriteria = this._cloneSelectedCriteria();

    if (selectedCriteria[facetId]) {
      delete selectedCriteria[facetId][criteriaId];
      if (!Object.keys(selectedCriteria[facetId]).length) {
        delete selectedCriteria[facetId];
      }
    }

    this.props.onCriteriaDeselection(facetId, criteriaId);
    this.props.onSelectionChanged(selectedCriteria);
  }

  _handleFacetClear(facetId) {
    let selectedCriteria;

    selectedCriteria = this._cloneSelectedCriteria();
    delete selectedCriteria[facetId];

    this.props.onFacetClear(facetId);
    this.props.onSelectionChanged(selectedCriteria);
  }

  _handleClearAll() {
    this.props.onClearAll();
    this.props.onSelectionChanged({});
  }

  _cloneSelectedCriteria() {
    return JSON.parse(JSON.stringify(this.props.selectedCriteria));
  }
}

FacetsSection.defaultProps = {
  selectedCriteria: {},
  onCriteriaSelection: () => {},
  onCriteriaDeselection: () => {},
  onFacetClear: () => {},
  onClearAll: () => {}
};

FacetsSection.propTypes = {
  sectionHeader: PropTypes.string.isRequired,
  selectedCriteria: PropTypes.object,
  onSelectionChanged: PropTypes.func.isRequired,
  onCriteriaSelection: PropTypes.func,
  onCriteriaDeselection: PropTypes.func,
  onFacetClear: PropTypes.func,
  onClearAll: PropTypes.func
};

export default FacetsSection;
