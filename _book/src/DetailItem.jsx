import React from 'react';
import classnames from 'classnames';

const DetailItem = (props) => (
  <li { ...props } className={ classnames('rs-detail-item', props.className) }>
    { props.children }
  </li>
);

DetailItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailItem;
