import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailsSectionSubtitle = (props) => (
  <div className={ classnames('rs-detail-section-subtitle', props.className) }>
    { props.children }
  </div>
);

DetailsSectionSubtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DetailsSectionSubtitle;
