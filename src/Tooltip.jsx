import React from 'react';
import Tether from 'tether';
import TooltipInnerContent from './TooltipInnerContent';

class Tooltip extends React.Component {

  componentDidMount() {
    this._containerDiv = document.createElement('div');
    this._containerDiv.className = 'rs-tooltip';
    document.body.appendChild(this._containerDiv);
    this._toggleTooltip();
  }

  componentWillUnmount() {
    this._hide();
    document.body.removeChild(this._containerDiv);
  }

  componentDidUpdate() {
    this._toggleTooltip();
  }

  render() {
    return null;
  }

  _toggleTooltip() {
    if (this.props.isOpen) {
      this._show();
    } else {
      this._hide();
    }
  }

  _hide() {
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

  _show() {
    this._containerDiv.className += ' visible';
    this._tooltipNode = React.render(
      <TooltipInnerContent onMouseOver={this.props.onMouseOver} onMouseLeave={this.props.onMouseLeave}>
        {this.props.children}
      </TooltipInnerContent>,
      this._containerDiv
    );
    this._tether = this._createTether(this._getTetherConfig());
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
    tetherConfig.target = this.props.target();
    tetherConfig.constraints = [
      { to: 'window', pin: true, attachment: 'together' }
    ];

    return tetherConfig;
  }
}

Tooltip.propTypes = {
  isOpen: React.PropTypes.bool,
  target: React.PropTypes.func.isRequired,
  onMouseOver: React.PropTypes.func.isRequired,
  onMouseLeave: React.PropTypes.func.isRequired,
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

Tooltip.defaultProps = {
  isOpen: false,
  placement: 'bottom-right'
};

export default Tooltip;
