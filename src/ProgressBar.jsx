import React from 'react';
import classNames from 'classnames';

const SIZE_CLASSES = {
  'xsmall': 'rs-progress-xsmall',
  'small': 'rs-progress-small',
  'medium': 'rs-progress-medium',
  'large': 'rs-progress-large',
  'xlarge': 'rs-progress-xlarge'
};

const STATUS_CLASSES = {
  'ok': 'rs-status-ok',
  'error': 'rs-status-error',
  'warning': 'rs-status-warning',
  'info': 'rs-status-info'
};

const TYPE_CLASSES = {
  'solid': 'rs-bar-solid',
  'striped': 'rs-bar-striped'
};

class ProgressBar extends React.Component {
  render() {
    const sizeClass = classNames(
      'rs-progress',
      SIZE_CLASSES[this.props.size]
    );
    const statusClass = classNames(
      'rs-bar',
      STATUS_CLASSES[this.props.status],
      TYPE_CLASSES[this.props.type]
    );
    const style = { 'width': `${ this.props.progress }%` };

    return (
      <div className={ sizeClass }>
        <div className='rs-progress-inner'>
          <div className='rs-segment' style={ style }>
            <div className={ statusClass }></div>
          </div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: React.PropTypes.number,
  status: React.PropTypes.oneOf(Object.keys(STATUS_CLASSES)),
  type: React.PropTypes.oneOf(Object.keys(TYPE_CLASSES)),
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES)),
};

ProgressBar.defaultProps = {
  progress: 0,
  status: 'ok',
  type: 'solid'
};

export default ProgressBar;
