import React from 'react';
import classnames from 'classnames';
import DetailsSectionTitle from './DetailsSectionTitle';

class DetailsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCollapsed: props.initialCollapsed };
  }

  toggleCollapsed() {
    if (this.props.collapsible) {
      let newState = !this.state.isCollapsed;
      this.setState({ isCollapsed: newState });
      this.props.onToggleCollapsed(newState);
    }
  }

  render() {
    let classNames, { collapsible, isLoading } = this.props, { isCollapsed } = this.state;

    classNames = {
      'rs-collapsible-section collapsed': collapsible && isCollapsed,
      'rs-collapsible-section expanded': collapsible && !isCollapsed,
      'loading': isLoading
    };

    return (
      <div { ...this.props }
        className={ classnames('rs-detail-section', this.props.className, classNames) }>
        <div className='rs-detail-section-header' onClick={ this.toggleCollapsed.bind(this) }>
          { this.props.headers }
          { collapsible ? <div className='rs-caret'></div> : null }
          { this.props.title ? <DetailsSectionTitle>{ this.props.title }</DetailsSectionTitle> : null}
          { this.props.subtitle }
        </div>
        <div className='rs-detail-section-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DetailsSection.propTypes = {
  title: React.PropTypes.node,
  children: React.PropTypes.node,
  headers: React.PropTypes.node,
  isLoading: React.PropTypes.bool,
  initialCollapsed: React.PropTypes.bool,
  onToggleCollapsed: React.PropTypes.func,
  collapsible: React.PropTypes.bool,
  className: React.PropTypes.string,
  subtitle: React.PropTypes.node
};

DetailsSection.defaultProps = {
  collapsible: false,
  initialCollapsed: false,
  isLoading: false,
  onToggleCollapsed: () => {}
};

export default DetailsSection;
