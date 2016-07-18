import React from 'react';
import classNames from 'classnames';

const ARROW_POSITIONS = {
  'right': 'rs-popover-arrow-left-top',
  'bottom-right': 'rs-popover-arrow-top-left',
  'left': 'rs-popover-arrow-right-top',
  'bottom-left': 'rs-popover-arrow-top-right'
};

class PopoverOverlay extends React.Component {

  _shouldShowArrow() {
    return this.props.placement !== 'center';
  }

  render() {
    let arrowPlacement;

    arrowPlacement = classNames(
      'rs-popover-arrow',
      ARROW_POSITIONS[this.props.placement]
    );

    if (this._shouldShowArrow()) {
      return (
        <div className={this.props.className}>
          <div className={arrowPlacement}></div>
          <div className='rs-popover-content'>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div className={this.props.className}>
          <div className='rs-popover-content'>
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}

PopoverOverlay.defaultProps = {
  placement: 'right'
};

PopoverOverlay.propTypes = {
  children: React.PropTypes.node.isRequired,
  placement: React.PropTypes.oneOf([
    'right', 'bottom-right', 'left', 'bottom-left', 'center'
  ])
};

export default PopoverOverlay;
