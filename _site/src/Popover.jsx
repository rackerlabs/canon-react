import React from 'react';
import ReactDOM from 'react-dom';
import Tether from 'tether';
import PopoverBackground from './PopoverBackground';

class Popover extends React.Component {

  constructor(props) {
    super(props);

    this._escapeHandler = this._handleEscapePress.bind(this);
  }

  componentWillUnmount() {
    this._hide();
    document.body.removeChild(this._containerDiv);
    document.body.removeChild(this._backgroundDiv);
  }

  componentDidMount() {
    this._containerDiv = document.createElement('div');
    document.body.appendChild(this._containerDiv);
    this._backgroundDiv = document.createElement('div');
    this._backgroundDiv.style.display = 'none';
    document.body.appendChild(this._backgroundDiv);
    this._togglePopoverOverlay();
  }

  componentDidUpdate() {
    this._togglePopoverOverlay();
  }

  render() {
    return null;
  }

  _togglePopoverOverlay() {
    if (this.props.isOpen) {
      this._show();
    } else {
      this._hide();
    }
  }

  _hide() {
    this._hidePopoverOverlay();
    this._hidePopoverBackgroundOverlay();
  }

  _hidePopoverOverlay() {
    this._removeDocumentListeners();
    this._containerDiv.className = this._containerDiv.className.replace( /(?:^|\s)rs-popover(?!\S)/g, '' );
    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
    }
    if (this._popoverNode) {
      ReactDOM.unmountComponentAtNode(this._containerDiv);
      this._popoverNode = null;
    }
  }

  _hidePopoverBackgroundOverlay() {
    this._backgroundDiv.style.display = 'none';
    ReactDOM.unmountComponentAtNode(this._backgroundDiv);
  }

  _removeDocumentListeners() {
    document.removeEventListener('keyup', this._escapeHandler, false);
  }

  _show() {
    this._renderPopoverOverlay();
    this._listenForEscapePress();
  }

  _renderPopoverOverlay() {
    let popover;

    this._backgroundDiv.style.display = 'block';
    ReactDOM.render(<PopoverBackground isModal={ this.props.isModal } onRequestClose={this.props.onRequestClose} />, this._backgroundDiv);
    this._containerDiv.className += ' rs-popover';

    if (!this._tether) {
      this._tether = this._createTether(this._getTetherConfig());
    }
    popover = React.cloneElement(
      React.Children.only(this.props.children),
      {
        placement: this.props.placement
      }
    );
    this._popoverNode = ReactDOM.render(popover, this._containerDiv);
    this._tether.position();
  }

  // This is a seam for testing
  _createTether(tetherConfig) {
    return new Tether(tetherConfig);
  }

  _getTetherConfig() {
    let tetherConfig;

    switch (this.props.placement) {
      case 'left':
        tetherConfig = {
          attachment: 'top right',
          targetAttachment: 'middle left',
          offset: '38px 20px'
        };
        break;
      case 'bottom-left':
        tetherConfig = {
          attachment: 'top right',
          targetAttachment: 'bottom left',
          offset: '-20px -45px'
        };
        break;
      case 'bottom-right':
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'bottom right',
          offset: '-20px 45px'
        };
        break;
      case 'right':
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'middle right',
          offset: '38px -20px'
        };
        break;
      case 'center':
        tetherConfig = {
          attachment: 'middle center',
          targetAttachment: 'middle center',
          targetModifier: 'visible'
        };
        break;
      default:
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'middle right',
          offset: '38px -20px'
        };
    }

    if (this.props.offset) {
      tetherConfig.offset = this.props.offset;
    }
    tetherConfig.element = ReactDOM.findDOMNode(this._containerDiv);
    tetherConfig.target = this._getTarget();
    return tetherConfig;
  }

  _getTarget() {
    let target;

    target = this.props.target;

    if (target instanceof Function) {
      return this.props.target();
    }

    return document.getElementById(target);
  }

  _listenForEscapePress() {
    document.addEventListener('keyup', this._escapeHandler, false);
  }

  _handleEscapePress(e) {
    if (e.keyCode === 27) {
      this.props.onRequestClose();
    }
  }
}

Popover.defaultProps = {
  placement: 'right',
  isOpen: false
};

Popover.propTypes = {
  children: React.PropTypes.element.isRequired,
  isModal: React.PropTypes.bool,
  isOpen: React.PropTypes.bool,
  offset: React.PropTypes.string,
  onRequestClose: React.PropTypes.func.isRequired,
  placement: React.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left', 'center']),
  target: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.func
  ]).isRequired
};

export default Popover;
