import React from 'react';
import classnames from 'classnames';

class DetailsSectionTitle extends React.Component {
  render() {
    return (
      <div className={ classnames('rs-detail-section-title', this.props.className) }>
        { this.props.children }
      </div>
    );
  }
}

DetailsSectionTitle.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

export default DetailsSectionTitle;
