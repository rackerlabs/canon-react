import React from 'react';
import classnames from 'classnames';

export default class DetailsSection extends React.Component {
  constructor(props) {
    super(props);

    if (props.isCollapsible === true) {
      this.state = { changedClass: 'expanded' };
    } else {
      this.state = { changedClass: undefined };
    }
  }

  collapseSection() {
    if (this.state.changedClass === 'expanded') {
      this.setState({ changedClass: 'collapsed' });
    } else if (this.state.changedClass === 'collapsed') {
      this.setState({ changedClass: 'expanded' });
    }
  }

  render() {
    return (
      <div isCollapsible={ this.props.isCollapsible } onClick={ this.collapseSection.bind(this) } className={ classnames('rs-detail-section rs-collapsible-section', this.state.changedClass) }>
        <div className="rs-detail-section-header">
          { this.props.isCollapsible ? <div className="rs-caret"></div> : null}
          <div className="rs-detail-section-title">{ this.props.title }</div>
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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  isCollapsible: React.PropTypes.bool
};

DetailsSection.defaultProps = {
  isCollapsible: false
};
