import React from 'react';

export default class DetailsSection extends React.Component {
  render() {
    return (
      <div className="rs-detail-section">
        <div className="rs-detail-section-header">
          <div className="rs-detail-section-title">{this.props.title}</div>
        </div>
        <div className="rs-detail-section-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

DetailsSection.propTypes = {
  title: React.PropTypes.node.isRequired,
  children: React.PropTypes.node
};
