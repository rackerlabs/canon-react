import React from 'react';

class TooltipInnerContent extends React.Component {
  render() {
    return (
      <div className="rs-tooltip-inner">
        {this.props.children}
      </div>
    );
  }
}

export default TooltipInnerContent;
