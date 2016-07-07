import React from 'react';
import classnames from 'classnames';

const DetailsSectionTitle = (props) => (
  <div className={ classnames('rs-detail-section-title', props.className) }>
    { props.children }
  </div>
);

DetailsSectionTitle.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

export default DetailsSectionTitle;
