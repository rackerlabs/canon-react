import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailsSectionSubtitle = (props) => {
  let { className, children, ...rest } = props;
  return (
    <div { ...rest } className={ classnames('rs-detail-section-subtitle', className) }>
      { children }
    </div>
  );
};

DetailsSectionSubtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DetailsSectionSubtitle;
