import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailItem = (props) => {
  const { className, children, ...rest } = props;
  return (
    <li { ...rest } className={ classnames('rs-detail-item', className) }>
      { children }
    </li>
  );
};

DetailItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailItem;
