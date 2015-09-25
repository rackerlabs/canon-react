import React from 'react';

class SectionHeader extends React.Component {
  render() {
    return (
      <div className="header-section" id={this.props.id}>
        <div className="header-section-subtitle">components</div>
        <div className="header-section-title">{this.props.children}</div>
      </div>
    );
  }
}

export default SectionHeader;
