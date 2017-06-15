import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailList = (props) => {
  const { className, children, ...rest } = props;
  return (
    <ul { ...rest } className={ classnames('rs-detail-list', className) }>
      { children }
    </ul>
  );
};

DetailList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailList;
