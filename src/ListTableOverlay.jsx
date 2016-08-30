import classNames from 'classnames';
import React from 'react';

const ListTableOverlay = ({ title, subtitle, message, className }) => (
  <div className={ classNames('rs-table-overlay', className) }>
    <div className="rs-table-overlay-content">
      { title ? <div className="rs-table-overlay-title">{ title }</div> : null }
      { subtitle ? <div className="rs-table-overlay-subtitle">{ subtitle }</div> : null }
      { message ? <div className="rs-table-overlay-message">{ message }</div> : null }
    </div>
  </div>
);

ListTableOverlay.propTypes = {
  title: React.PropTypes.node,
  subtitle: React.PropTypes.node,
  message: React.PropTypes.node
};

export default ListTableOverlay;
