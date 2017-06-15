import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailItemKey = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div { ...rest } className={ classnames('rs-detail-key', className) }>
      { children }
    </div>
  );
};

DetailItemKey.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailItemKey;
