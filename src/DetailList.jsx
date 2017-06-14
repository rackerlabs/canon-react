import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailList = (props) => (
  <ul { ...props } className={ classnames('rs-detail-list', props.className) }>
    { props.children }
  </ul>
);

DetailList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailList;
