import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailItemKey = (props) => (
  <div { ...props } className={ classnames('rs-detail-key', props.className) }>
    { props.children }
  </div>
);

DetailItemKey.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailItemKey;
