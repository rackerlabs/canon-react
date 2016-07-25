import React from 'react';
import classnames from 'classnames';

const DetailList = (props) => (
  <ul { ...props } className={ classnames('rs-detail-list', props.className) }>
    { props.children }
  </ul>
);

DetailList.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailList;
