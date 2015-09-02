import React from 'react';
import Tooltip from './Tooltip';

class TooltipTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipOpen: false,
      isMouseInTooltip: false
    };
  }

  render() {
    let triggerProps;

    triggerProps = {
      onMouseOver: (e) => { this._showTooltip() },
      onMouseOut: () => { this._hideTooltip() },
      ref: 'trigger'
    };

    this._trigger = React.cloneElement(React.Children.only(this.props.children), triggerProps);

    return (
      <trigger>
        {this._trigger}
        <Tooltip isOpen={this._shouldShowTooltip()}
          target={this._getTarget.bind(this)}
          onMouseOut={this._mouseLeavingTooltip.bind(this)}
          onMouseOver={this._mouseEnteringTooltip.bind(this)}>
          {this.props.content}
        </Tooltip>
      </trigger>
    );
  }

  _showTooltip(e) {
    setTimeout(() => {this.setState({isTooltipOpen: true});}, 200);
  }

  _hideTooltip() {
    setTimeout(() => {this.setState({isTooltipOpen: false});}, 200);
  }

  _shouldShowTooltip() {
    return this.state.isTooltipOpen || this.state.isMouseInTooltip;
  }

  _getTarget() {
    return React.findDOMNode(this.refs.trigger);
  }

  _mouseLeavingTooltip() {
    this.setState({isMouseInTooltip: false});
  }

  _mouseEnteringTooltip() {
    this.setState({isMouseInTooltip: true});
  }
}

// TooltipTrigger.propTypes = {
//   content: React.PropTypes.node.isRequired
// };

export default TooltipTrigger;
