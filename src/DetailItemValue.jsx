import React from 'react';
import classnames from 'classnames';

const DetailItemValue = (props) => (
  <div { ...props } className={ classnames('rs-detail-value', props.className) }>
    { props.children }
  </div>
);

DetailItemValue.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailItemValue;
