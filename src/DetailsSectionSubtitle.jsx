import React from 'react';
import classnames from 'classnames';

class DetailsSectionSubtitle extends React.Component {
  render() {
    return (
      <div className={ classnames('rs-detail-section-subtitle', this.props.className) }>
        { this.props.children }
      </div>
    );
  }
}

DetailsSectionSubtitle.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

export default DetailsSectionSubtitle;
