import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const DetailItemValue = (props) => (
  <div { ...props } className={ classnames('rs-detail-value', props.className) }>
    { props.children }
  </div>
);

DetailItemValue.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DetailItemValue;
