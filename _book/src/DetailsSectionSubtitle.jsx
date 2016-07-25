import React from 'react';
import classnames from 'classnames';

const DetailsSectionSubtitle = (props) => (
  <div className={ classnames('rs-detail-section-subtitle', props.className) }>
    { props.children }
  </div>
);

DetailsSectionSubtitle.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

export default DetailsSectionSubtitle;
