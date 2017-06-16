import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailItemValue = (props) => {
  const { className, children, ...rest } = props;
  return (
    <div { ...rest } className={ classnames('rs-detail-value', className) }>
      { children }
    </div>
  );
};

DetailItemValue.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailItemValue;
