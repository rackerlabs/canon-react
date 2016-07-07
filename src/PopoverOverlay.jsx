import React from 'react';
import classNames from 'classnames';

const ARROW_POSITIONS = {
  'right': 'rs-popover-arrow-left-top',
  'bottom-right': 'rs-popover-arrow-top-left',
  'left': 'rs-popover-arrow-right-top',
  'bottom-left': 'rs-popover-arrow-top-right',
  'center': null
};

class PopoverOverlay extends React.Component {
  _shouldShowArrow() {
    return this.props.placement !== 'center';
  }

  render() {
    const arrowPlacement = classNames(
      'rs-popover-arrow',
      ARROW_POSITIONS[this.props.placement]
    );

    return (
      <div className={ this.props.className }>
        { this._shouldShowArrow() ? <div className={ arrowPlacement }></div> : null }
        <div className='rs-popover-content'>
          { this.props.children }
        </div>
      </div>
    );

  }
}

PopoverOverlay.defaultProps = {
  placement: 'right'
};

PopoverOverlay.propTypes = {
  children: React.PropTypes.node.isRequired,
  placement: React.PropTypes.oneOf(Object.keys(ARROW_POSITIONS))
};

export default PopoverOverlay;
