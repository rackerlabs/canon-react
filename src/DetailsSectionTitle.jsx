import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailsSectionTitle = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div { ...rest } className={ classnames('rs-detail-section-title', className) }>
      { children }
    </div>
  );
};

DetailsSectionTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default DetailsSectionTitle;
