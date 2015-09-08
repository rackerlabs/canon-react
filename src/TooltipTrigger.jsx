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
    let triggerProps, showTooltipfunc, hideTooltipFunc;

    showTooltipfunc = () => { this._showTooltip(); };
    hideTooltipFunc = () => { this._hideTooltip(); };
    triggerProps = {
      onMouseOver: showTooltipfunc,
      onMouseLeave: hideTooltipFunc,
      onFocus: showTooltipfunc,
      onBlur: hideTooltipFunc,
      ref: 'trigger'
    };

    this._trigger = React.cloneElement(React.Children.only(this.props.children), triggerProps);

    return (
      <trigger>
        {this._trigger}
        <Tooltip placement={this.props.placement} isOpen={this._shouldShowTooltip()}
          target={this._getTarget.bind(this)}
          onMouseLeave={this._mouseLeavingTooltip.bind(this)}
          onMouseOver={this._mouseEnteringTooltip.bind(this)}>
          {this.props.content}
        </Tooltip>
      </trigger>
    );
  }

  _showTooltip() {
    setTimeout(() => {this.setState({isTooltipOpen: true}); }, 200);
  }

  _hideTooltip() {
    setTimeout(() => {this.setState({isTooltipOpen: false}); }, 200);
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

TooltipTrigger.propTypes = {
  content: React.PropTypes.node.isRequired,
  placement: React.PropTypes.oneOf([
    'right',
    'bottom-right',
    'top-right',
    'top',
    'left',
    'bottom-left',
    'top-left',
    'bottom'
  ])
};

TooltipTrigger.defaultProps = {
  placement: 'bottom-right'
};

export default TooltipTrigger;
