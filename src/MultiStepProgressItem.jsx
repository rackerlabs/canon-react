import React from 'react';
import classNames from 'classnames';

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

class MultiStepProgressItem extends React.Component {
  render() {
    const statusClass = classNames(
      'rs-bar',
      STATUS_CLASSES[this.props.status],
      TYPE_CLASSES[this.props.type]
    );
    const style = { 'width': `${ this.props.progress }%` };

    return (
      <div className="rs-segment" style={ style }>
        <div className={ statusClass }></div>
        <div className="rs-caption">
          { this.props.children }
        </div>
      </div>
    );
  }
}

MultiStepProgressItem.propTypes = {
  progress: React.PropTypes.number,
  status: React.PropTypes.oneOf(Object.keys(STATUS_CLASSES)),
  type: React.PropTypes.oneOf(Object.keys(TYPE_CLASSES))
};

MultiStepProgressItem.defaultProps = {
  progress: 0,
  status: '',
  type: ''
};

export default MultiStepProgressItem;
