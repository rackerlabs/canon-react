import React from 'react';

class PopoverOverlay extends React.Component {

  _arrowPlacement() {
    let arrowClasses, arrowPositions;

    arrowPositions = {
      'right': 'rs-popover-arrow-left-top',
      'bottom-right': 'rs-popover-arrow-top-left',
      'left': 'rs-popover-arrow-right-top',
      'bottom-left': 'rs-popover-arrow-top-right'
    };
    arrowClasses = ['rs-popover-arrow'];

    arrowClasses.push(arrowPositions[this.props.placement]);

    return arrowClasses.join(' ');
  }

  _shouldShowArrow() {
    return this.props.placement !== 'center';
  }

  render() {
    if (this._shouldShowArrow()) {
      return (
        <div className={this.props.className}>
          <div className={this._arrowPlacement()}></div>
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

PopoverOverlay.propTypes = {
  placement: React.PropTypes.oneOf([
    'right', 'bottom-right', 'left', 'bottom-left', 'center'
  ])
};

PopoverOverlay.defaultProps = {
  placement: 'right'
};

export default PopoverOverlay;
