import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const STATUS_INDICATOR = {
  'error': 'rs-status rs-status-error',
  'processing': 'rs-status rs-status-processing',
  'warning': 'rs-status rs-status-warning',
  'ok': 'rs-status rs-status-ok',
  'disabled': 'rs-status rs-status-disabled'
};

class StatusIndicator extends React.Component {
  render() {
    const { status, ...rest } = this.props;
    const classes = classNames(
      rest.className,
      STATUS_INDICATOR[status],
      { 'rs-hidden': rest.hidden }
    );
    return (
      <span { ...rest } className={ classes }>
        { rest.children }
      </span>
    );
  }
}

StatusIndicator.propTypes = {
  status: PropTypes.oneOf(Object.keys(STATUS_INDICATOR)),
  hidden: PropTypes.bool
};

StatusIndicator.defaultProps = {
  status: 'ok',
  hidden: false
};

export default StatusIndicator;
