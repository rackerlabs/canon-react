import React from 'react';
import classNames from 'classnames';

import FacetToggler from './FacetToggler';

class Facet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      criteriaTruncated: props.truncationEnabled
    };
  }

  render() {
    let criteriaElements, clearLinkClasses, facetToggler,
        expandedClass, sectionClasses;

    criteriaElements = this._getCriteriaElements();
    facetToggler = this._getMoreOrLessToggle(criteriaElements);

    clearLinkClasses = classNames(
      'rs-facet-clear-link',
      { 'rs-hidden': !this._facetHasSelectedCriteria() }
    );

    expandedClass = this.state.criteriaTruncated ? 'collapsed' : 'expanded';
    sectionClasses = classNames(
      'rs-facet-section',
      expandedClass
    );

    return (
      <div className={ sectionClasses }>
        <div className='rs-facet-section-header'>
          <div className={ clearLinkClasses } onClick={ this._handleClear.bind(this) }>
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

  _handleSelectionChanged(isSelected, criteriaId) {
    if (this.props.onSelectionChanged) {
      this.props.onSelectionChanged(isSelected, this.props.id, criteriaId);
    }
  }

  _handleClear() {
    if (this.props.onFacetClear) {
      this.props.onFacetClear(this.props.id);
    }
  }

  _getCriteriaElements() {
    let index;

    index = 0;
    return React.Children.map(this.props.children, (child) => {
      let isSelected, isTruncated, isHidden;

      isSelected = !!this.props.selectedCriteria[child.props.id];

      isTruncated = this.state.criteriaTruncated && index++ >= this.props.truncationLength;
      isHidden = child.props.isHidden || isTruncated;
      return React.cloneElement(child, {
        isSelected: isSelected,
        hidden: isHidden,
        onSelectionChanged: this._handleSelectionChanged.bind(this)
      });
    }, this);
  }

  _getMoreOrLessToggle() {
    if (this.props.truncationEnabled && React.Children.count(this.props.children) > this.props.truncationLength) {
      return (
        <FacetToggler
          criteriaTruncated={ this.state.criteriaTruncated }
          onToggleChange={ this._toggleShowLess.bind(this) } />
      );
    }
    return null;
  }

  _toggleShowLess(truncationChange) {
    this.setState({criteriaTruncated: truncationChange});
  }

  _facetHasSelectedCriteria() {
    return Object.keys(this.props.selectedCriteria).length > 0;
  }
}

Facet.defaultProps = {
  selectedCriteria: {},
  truncationLength: 5,
  truncationEnabled: true
};

Facet.propTypes = {
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  onSelectionChanged: React.PropTypes.func,
  onFacetClear: React.PropTypes.func,
  selectedCriteria: React.PropTypes.object,
  truncationLength: React.PropTypes.number,
  truncationEnabled: React.PropTypes.bool
};

export default Facet;
