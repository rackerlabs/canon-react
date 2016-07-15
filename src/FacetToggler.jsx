import React from 'react';

class FacetToggler extends React.Component {
  constructor(props) {
    super(props);

    this._handleToggleChange = this._handleToggleChange.bind(this);
  }

  render() {
    const toggleText = this.props.criteriaTruncated ? 'more' : 'less';

    return (
      <li className='rs-facet-section-toggle' onClick={ this._handleToggleChange }>
        <i className='rs-facet-toggle-arrow' />{ toggleText }
      </li>
    );
  };

  _handleToggleChange() {
    this.props.onToggleChange(!this.props.criteriaTruncated);
  };
}

FacetToggler.propTypes = {
  criteriaTruncated: React.PropTypes.bool.isRequired,
  onToggleChange: React.PropTypes.func.isRequired
};

export default FacetToggler;
