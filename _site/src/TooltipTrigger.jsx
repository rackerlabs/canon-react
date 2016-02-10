import React from 'react';
import Tether from 'tether';

class TooltipTrigger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTooltipOpen: false,
      isMouseInTooltip: false
    };
  }

  componentDidMount() {
    this._containerDiv = document.createElement('div');
    this._containerDiv.className = 'rs-tooltip';
    document.body.appendChild(this._containerDiv);
    this._updateTooltipVisibility();
  }

  componentWillUnmount() {
    if (this._hideTimer) {
      clearInterval(this._hideTimer);
    }

    if (this._showTimer) {
      clearInterval(this._showTimer);
    }

    if (this._hideOnLeavingTooltipTimer) {
      clearInterval(this._hideOnLeavingTooltipTimer);
    }

    this._hideTooltip();
    document.body.removeChild(this._containerDiv);
  }

  componentDidUpdate() {
    this._updateTooltipVisibility();
  }

  _updateTooltipVisibility() {
    if (this._shouldShowTooltip()) {
      this._showTooltip();
    } else {
      this._hideTooltip();
    }
  }

  _hideTooltip() {
    this._containerDiv.className = this._containerDiv.className.replace(/(?:^|\s)visible(?!\S)/g, '');
    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
    }

    if (this._tooltipNode) {
      React.unmountComponentAtNode(this._containerDiv);
      this._tooltipNode = null;
    }
  }

  _showTooltip() {
    this._containerDiv.className += ' visible';
    this._tooltipNode = React.render(
      <div className='rs-tooltip-inner'
        onMouseOver={this._mouseEnteringTooltip.bind(this)}
        onMouseLeave={this._mouseLeavingTooltip.bind(this)}>
        {this.props.content}
      </div>,
      this._containerDiv
    );
    if (!this._tether) {
      this._tether = this._createTether(this._getTetherConfig());
    }
  }

  _createTether(tetherConfig) {
    return new Tether(tetherConfig);
  }

  _getTetherConfig() {
    let tetherConfig;

    switch (this.props.placement) {
      case 'left':
        tetherConfig = {
          attachment: 'middle right',
          targetAttachment: 'middle left'
        };
        break;
      case 'bottom-left':
        tetherConfig = {
          attachment: 'top right',
          targetAttachment: 'bottom left'
        };
        break;
      case 'top-left':
        tetherConfig = {
          attachment: 'bottom right',
          targetAttachment: 'top left'
        };
        break;
      case 'top':
        tetherConfig = {
          attachment: 'bottom middle',
          targetAttachment: 'top middle'
        };
        break;
      case 'bottom':
        tetherConfig = {
          attachment: 'top middle',
          targetAttachment: 'bottom middle'
        };
        break;
      case 'right':
        tetherConfig = {
          attachment: 'middle left',
          targetAttachment: 'middle right'
        };
        break;
      case 'top-right':
        tetherConfig = {
          attachment: 'bottom left',
          targetAttachment: 'top right'
        };
        break;
      case 'bottom-right':
      default:
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'bottom right'
        };
      break;
    }

    tetherConfig.targetModifier = 'visible';
    tetherConfig.element = React.findDOMNode(this._containerDiv);
    tetherConfig.target = this._getTarget();
    tetherConfig.constraints = [
      { to: 'window', pin: true, attachment: 'together' }
    ];

    return tetherConfig;
  }

  render() {
    let triggerProps, showTooltipfunc, hideTooltipFunc;

    showTooltipfunc = this._showTooltipOnInterval.bind(this);
    hideTooltipFunc = this._hideTooltipOnInterval.bind(this);
    triggerProps = {
      onMouseOver: showTooltipfunc,
      onMouseLeave: hideTooltipFunc,
      onFocus: showTooltipfunc,
      onBlur: hideTooltipFunc,
      ref: 'trigger'
    };

    return React.cloneElement(React.Children.only(this.props.children), triggerProps);
  }

  _showTooltipOnInterval() {
    if (this._hideTimer) {
      clearInterval(this._hideTimer);
    }
    this._showTimer = setTimeout(() => { this.setState({isTooltipOpen: true}); }, 200);
  }

  _hideTooltipOnInterval() {
    if (this._showTimer) {
      clearInterval(this._showTimer);
    }
    this._hideTimer = setTimeout(() => { this.setState({isTooltipOpen: false}); }, 200);
  }

  _shouldShowTooltip() {
    return this.state.isTooltipOpen || this.state.isMouseInTooltip;
  }

  _getTarget() {
    return React.findDOMNode(this.refs.trigger);
  }

  _mouseLeavingTooltip() {
    this._hideOnLeavingTooltipTimer = setTimeout(() => { this.setState({isMouseInTooltip: false}); }, 250);
  }

  _mouseEnteringTooltip() {
    if (this._hideOnLeavingTooltipTimer) {
      clearInterval(this._hideOnLeavingTooltipTimer);
    }
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
