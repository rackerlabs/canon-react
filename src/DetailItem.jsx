import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailItem = (props) => (
  <li { ...props } className={ classnames('rs-detail-item', props.className) }>
    { props.children }
  </li>
);

DetailItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailItem;
