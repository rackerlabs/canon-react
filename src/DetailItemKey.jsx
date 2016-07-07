import React from 'react';
import classnames from 'classnames';

const DetailItemKey = (props) => (
  <div { ...props } className={ classnames('rs-detail-key', props.className) }>
    { props.children }
  </div>
);

DetailItemKey.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailItemKey;
