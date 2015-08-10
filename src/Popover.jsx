var React = require('react');
var Tether = require('tether');

var Popover = React.createClass({

  propTypes: {
    placement: React.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left']),
    isOpen: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      placement: 'right',
      isOpen: false
    };
  },

  componentWillUnmount: function () {
    this._hide();
    document.body.removeChild(this._containerDiv);
    document.body.removeChild(this._backgroundDiv);
  },

  componentDidMount: function () {
    this._containerDiv = document.createElement('div');
    document.body.appendChild(this._containerDiv);
    this._backgroundDiv = document.createElement('div');
    this._backgroundDiv.style.display = 'none';
    this._backgroundDiv.style.position = 'fixed';
    this._backgroundDiv.style.left = 0;
    this._backgroundDiv.style.top = 0;
    this._backgroundDiv.style.width = '100%';
    this._backgroundDiv.style.height = '100%';
    this._backgroundDiv.style.zIndex = 999;
    document.body.appendChild(this._backgroundDiv);
    this._togglePopoverOverlay();
  },

  componentDidUpdate: function () {
    this._togglePopoverOverlay();
  },

  render: function () {
    return null;
  },

  _togglePopoverOverlay: function () {
    if (this.props.isOpen) {
      this._show();
    } else {
      this._hide();
    }
  },

  _hide: function () {
    this._removeDocumentListeners();
    this._backgroundDiv.style.display = 'none';
    this._containerDiv.className = this._containerDiv.className.replace( /(?:^|\s)rs-popover(?!\S)/g , '' );
    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
    }
    if (this._popoverNode) {
      React.unmountComponentAtNode(this._containerDiv);
      this._popoverNode = null;
    }
  },

  _removeDocumentListeners: function () {
    document.removeEventListener('click', this._handleDocumentClick, false);
    document.removeEventListener('keyup', this._handleEscapePress, false);
  },

  _show: function () {
    this._renderPopoverOverlay();
    this._handleRootCloseEvents();
  },

  _renderPopoverOverlay: function () {
    var popover;

    this._backgroundDiv.style.display = 'block';
    this._containerDiv.className += ' rs-popover';

    popover = React.cloneElement(
      React.Children.only(this.props.children),
      {
        placement: this.props.placement
      }
    );
    this._popoverNode = React.render(popover, this._containerDiv);
    this._tether = this._createTether(this._getTetherConfig());
  },

  // This is a seam for testing
  _createTether: function (tetherConfig) {
    return new Tether(tetherConfig);
  },

  _getTetherConfig: function () {
    var tetherConfig;

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
      default:
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'middle right',
          offset: '38px -20px'
        };
    }

    tetherConfig.element = React.findDOMNode(this._containerDiv);
    tetherConfig.target = document.getElementById(this.props.target);
    return tetherConfig;
  },

  _handleRootCloseEvents: function () {
    this._handleClicksOutsideOfPopover();
    this._handleEscape();
  },

  _handleClicksOutsideOfPopover: function () {
    document.addEventListener('click', this._handleDocumentClick, false);
  },

  _handleDocumentClick: function (e) {
    console.log('hello')
    if (React.findDOMNode(this._popoverNode).contains(e.target)) {
      return;
    }
    this.props.onRequestClose();
  },

  _handleEscape: function () {
    document.addEventListener('keyup', this._handleEscapePress, false);
  },

  _handleEscapePress: function (e) {
    if (e.keyCode === 27) {
      this.props.onRequestClose();
    }
  }
});

module.exports = Popover;
