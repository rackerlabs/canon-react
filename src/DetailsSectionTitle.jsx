import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailsSectionTitle = (props) => (
  <div className={ classnames('rs-detail-section-title', props.className) }>
    { props.children }
  </div>
);

DetailsSectionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DetailsSectionTitle;
