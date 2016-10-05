import React from 'react';
import classNames from 'classnames';

const SIZE_CLASSES = {
  'xsmall': 'rs-progress-xsmall',
  'small': 'rs-progress-small',
  'medium': 'rs-progress-medium',
  'large': 'rs-progress-large',
  'xlarge': 'rs-progress-xlarge'
};

class MultiStepProgressBar extends React.Component {
  render() {
    const sizeClass = classNames(
      'rs-progress',
      SIZE_CLASSES[this.props.size]
    );

    return (
      <div className={ sizeClass }>
        <div className="rs-progress-inner">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MultiStepProgressBar.propTypes = {
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES))
};

export default MultiStepProgressBar;
