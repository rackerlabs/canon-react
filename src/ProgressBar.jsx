import React from 'react';
import ProgressBarContainer, { SIZE_CLASSES } from './ProgressBarContainer';
import ProgressSegment, { STATUS_CLASSES, TYPE_CLASSES } from './ProgressSegment';

class ProgressBar extends React.Component {
  render() {
    const { size, type, status, progress } = this.props;

    return (
      <ProgressBarContainer { ...{ size } }>
        <ProgressSegment { ...{ type, status } } width={ progress } />
      </ProgressBarContainer>
    );
  }
}

ProgressBar.propTypes = {
  progress: React.PropTypes.number,
  status: React.PropTypes.oneOf(Object.keys(STATUS_CLASSES)),
  type: React.PropTypes.oneOf(Object.keys(TYPE_CLASSES)),
  size: React.PropTypes.oneOf(Object.keys(SIZE_CLASSES))
};

ProgressBar.defaultProps = {
  progress: 0,
  status: 'ok',
  type: 'solid'
};

export default ProgressBar;
