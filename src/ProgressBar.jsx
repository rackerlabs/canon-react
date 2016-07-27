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

  _getSizeClass() {
     return classNames(
      'rs-progress',
      SIZE_CLASSES[this.props.size]
    );
  }

  _getStatusClass() {
    return classNames(
      'rs-bar',
      STATUS_CLASSES[this.props.status],
      TYPE_CLASSES[this.props.type]
    );
  }

  render() {
    let style, width;

    width = this.props.progress + '%';
    style = { 'width': width };

    return (
      <div className={this._getSizeClass()}>
        <div className='rs-progress-inner'>
          <div className='rs-segment' style={style}>
            <div className={this._getStatusClass()}></div>
          </div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: React.PropTypes.number,
  status: React.PropTypes.string,
  type: React.PropTypes.string,
  size: React.PropTypes.string
};

ProgressBar.defaultProps = {
  progress: 0,
  status: 'ok',
  type: 'solid'
};

export default ProgressBar;
