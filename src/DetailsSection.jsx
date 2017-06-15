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
    const { isCollapsed } = this.state;
    const {
      title,
      headers,
      isLoading,
      collapsible,
      className,
      subtitle,
      children,
      ...rest } = this.props;
    delete rest.initialCollapsed;
    delete rest.onToggleCollapsed;

    const classes = classnames(
      'rs-detail-section',
      className,
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
          { headers }
          { collapsible ? <div className='rs-caret'></div> : null }
          { title ? <DetailsSectionTitle>{ title }</DetailsSectionTitle> : null}
          { subtitle }
        </div>
        <div className='rs-detail-section-body'>
          { children }
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
