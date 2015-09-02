import React from 'react';
import Tether from 'tether';
import TooltipInnerContent from './TooltipInnerContent';

class Tooltip extends React.Component {

  componentDidMount() {
    this._containerDiv = document.createElement('div');
    this._containerDiv.className = 'rs-tooltip';
    document.body.appendChild(this._containerDiv);
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
    let tooltip;

    this._containerDiv.className += ' visible';
    tooltip = React.render(
      <TooltipInnerContent onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>
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
    return {
      attachment: 'top left',
      targetAttachment: 'bottom right',
      targetModifier: 'visible',
      element: React.findDOMNode(this._containerDiv),
      target: this.props.target(),
      constraints: [
        {to: 'window', pin: true, attachment: 'together'}
      ]
    };
  }
}

Tooltip.propTypes = {
  isOpen: React.PropTypes.bool
};

Tooltip.defaultProps = {
  isOpen: false
};

export default Tooltip;
