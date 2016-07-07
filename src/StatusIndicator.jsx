import React from 'react';
import classNames from 'classnames';

const STATUS_INDICATOR = {
  'error': 'rs-status-error',
  'processing': 'rs-status-processing',
  'warning': 'rs-status-warning',
  'ok': 'rs-status-ok',
  'disabled': 'rs-status-disabled'
};

class StatusIndicator extends React.Component {

  render() {
    const classes = classNames(
      'rs-status',
      this.props.className,
      STATUS_INDICATOR[this.props.status],
      { 'rs-hidden': this.props.hidden }
    );

    return (
      <span { ...this.props } className={ classes }>
        { this.props.children }
      </span>
    );
  }
}

StatusIndicator.propTypes = {
  status: React.PropTypes.oneOf(Object.keys(STATUS_INDICATOR)),
  hidden: React.PropTypes.bool
};

StatusIndicator.defaultProps = {
  status: 'ok',
  hidden: false
};

export default StatusIndicator;
