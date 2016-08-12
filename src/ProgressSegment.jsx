import React from 'react';
import classNames from 'classnames';

export const STATUS_CLASSES = {
  'ok': 'rs-status-ok',
  'error': 'rs-status-error',
  'warning': 'rs-status-warning',
  'info': 'rs-status-info',
  'none': ''
};

export const TYPE_CLASSES = {
  'solid': 'rs-bar-solid',
  'striped': 'rs-bar-striped',
  'empty': ''
};

class ProgressSegment extends React.Component {
  render() {
    let caption;
    if (this.props.children) {
      caption = (
        <div className="rs-caption">
          { this.props.children }
        </div>
      );
    }

    const statusClass = classNames(
      'rs-bar',
      STATUS_CLASSES[this.props.status],
      TYPE_CLASSES[this.props.type]
    );

    const style = { 'width': `${ this.props.width }%` };

    return (
      <div className='rs-segment' { ...{ style } }>
        <div className={ statusClass }></div>
        { caption }
      </div>
    );
  }
}

ProgressSegment.propTypes = {
  width: React.PropTypes.number.isRequired,
  status: React.PropTypes.oneOf(Object.keys(STATUS_CLASSES)),
  type: React.PropTypes.oneOf(Object.keys(TYPE_CLASSES))
};

ProgressSegment.defaultProps = {
  status: 'none',
  type: 'empty'
};

export default ProgressSegment;
