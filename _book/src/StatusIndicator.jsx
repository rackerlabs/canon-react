import React from 'react';
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
    let classes;

    classes = classNames(
      this.props.className,
      STATUS_INDICATOR[this.props.status],
      { 'rs-hidden': this.props.hidden }
    );
    return (
      <span {...this.props} className={classes}>
        {this.props.children}
      </span>
    );
  }
}

StatusIndicator.propTypes = {
  status: React.PropTypes.oneOf(['ok', 'error', 'processing', 'warning', 'disabled']),
  hidden: React.PropTypes.bool
};

StatusIndicator.defaultProps = {
  status: 'ok',
  hidden: false
};

export default StatusIndicator;
