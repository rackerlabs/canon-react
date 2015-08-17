var React = require('react');

var SectionHeader = React.createClass({
  render: function () {
    return (
      <div className="header-section" id={this.props.id}>
        <div className="header-section-subtitle">components</div>
        <div className="header-section-title">{this.props.children}</div>
      </div>
    );
  }
});

module.exports = SectionHeader;
