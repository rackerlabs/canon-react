import React from 'react';
import classnames from 'classnames';

export default class DetailsSection extends React.Component {
  constructor(props) {
    super(props);

    if (props.isCollapsible === true) {
      this.state = { isCollapsed: false };
    }
  }

  toggleCollapse() {
    if (this.props.isCollapsible) {
      this.setState({isCollapsed: !this.state.isCollapsed});
    }
  }

  render() {
    var collapsedClassName, showCaret;

    showCaret = false;
    if (this.props.isCollapsible) {
      showCaret = true;
      if (this.state.isCollapsed) {
        collapsedClassName = 'rs-collapsible-section collapsed';
      } else {
        collapsedClassName = 'rs-collapsible-section expanded';
      }
    }

    return (
      <div onClick={ this.toggleCollapse.bind(this) } className={ classnames('rs-detail-section', collapsedClassName) }>
        <div className='rs-detail-section-header'>
          { showCaret ? <div className='rs-caret'></div> : null}
          <div className='rs-detail-section-title'>{ this.props.title }</div>
        </div>
        <div className='rs-detail-section-body'>
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
