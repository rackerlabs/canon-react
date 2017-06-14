import React from 'react';
import PropTypes from 'prop-types';
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
    let divProps = Object.assign({}, this.props), { isCollapsed } = this.state;
    delete divProps.initialCollapsed;
    delete divProps.onToggleCollapsed;
    let { collapsible, isLoading, subtitle, ...rest } = divProps;

    const classes = classnames(
      'rs-detail-section',
      this.props.className,
      {
        'rs-collapsible-section': collapsible,
        'collapsed': collapsible && isCollapsed,
        'expanded': collapsible && !isCollapsed,
        'loading': isLoading
      }
    );

    return (
      <div { ...rest }
        className={ classes }>
        <div className='rs-detail-section-header' onClick={ this.toggleCollapsed.bind(this) }>
          { this.props.headers }
          { collapsible ? <div className='rs-caret'></div> : null }
          { this.props.title ? <DetailsSectionTitle>{ this.props.title }</DetailsSectionTitle> : null}
          { subtitle }
        </div>
        <div className='rs-detail-section-body'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DetailsSection.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
  headers: PropTypes.node,
  isLoading: PropTypes.bool,
  initialCollapsed: PropTypes.bool,
  onToggleCollapsed: PropTypes.func,
  collapsible: PropTypes.bool,
  className: PropTypes.string,
  subtitle: PropTypes.node
};

DetailsSection.defaultProps = {
  collapsible: false,
  initialCollapsed: false,
  isLoading: false,
  onToggleCollapsed: () => {}
};

export default DetailsSection;
