var React = require('react');
var Tether = require('tether');

var PopoverTrigger = React.createClass({

  propTypes: {
    placement: React.PropTypes.oneOf(['right', 'bottom-right', 'left', 'bottom-left'])
  },

  getDefaultProps: function () {
    return {
      placement: 'right'
    };
  },

  getInitialState: function () {
    return {
      isPopoverDisplayed: false
    };
  },

  componentWillUnmount: function () {
    this._unrenderPopover();
    document.body.removeChild(this._containerDiv);
  },

  componentDidMount: function () {
    this._containerDiv = document.createElement('div');
    this._containerDiv.className = 'popover-container';
    document.body.appendChild(this._containerDiv);
  },

  render: function () {
    var props;

    props = {};
    props.onClick = this._onTriggerClick;

    return (
      React.cloneElement(
        React.Children.only(this.props.children),
        props
      )
    );
  },

  _onTriggerClick: function () {
    if (this.state.isPopoverDisplayed) {
      this._hide();
    } else {
      this._show();
    }
  },

  _hide: function () {
    this._unrenderPopover();
    this.setState({ isPopoverDisplayed: false });
  },

  _unrenderPopover: function () {
    this._removeDocumentListeners();
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
    this._renderPopover();
    this._handleRootCloseEvents();
    this.setState({ isPopoverDisplayed: true});
  },

  _renderPopover: function () {
    var popover;

    popover = React.cloneElement(
      this.props.popover,
      {
        placement: this.props.placement,
        hideCallback: this._hide
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
    var tetherConfig, offsetWidth;

    switch (this.props.placement) {
      case 'left':
        offsetWidth = React.findDOMNode(this._popoverNode).offsetWidth + 20;
        tetherConfig = {
          attachment: 'middle left',
          targetAttachment: 'middle right',
          offset: '0 ' + offsetWidth + 'px',
          targetOffset: '-150% -100%'
        };
        break;
      case 'bottom-left':
        offsetWidth = React.findDOMNode(this._popoverNode).offsetWidth - 45;
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'bottom right',
          offset: '-20px ' + offsetWidth + 'px',
          targetOffset: '0 -100%'
        };
        break;
      case 'bottom-right':
        tetherConfig = {
          attachment: 'top left',
          targetAttachment: 'bottom right',
          targetOffset: '20px -50%'
        };
        break;
      case 'right':
        tetherConfig = {
          attachment: 'middle left',
          targetAttachment: 'middle right',
          targetOffset: '-150% 50%'
        };
        break;
      default:
        tetherConfig = {
          attachment: 'middle left',
          targetAttachment: 'middle right',
          targetOffset: '-150% 50%'
        };
    }

    tetherConfig.element = React.findDOMNode(this._containerDiv);
    tetherConfig.target = React.findDOMNode(this);
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
    if (React.findDOMNode(this._popoverNode).contains(e.target)) {
      return;
    }
    this._hide();
  },

  _handleEscape: function () {
    document.addEventListener('keyup', this._handleEscapePress, false);
  },

  _handleEscapePress: function (e) {
    if (e.keyCode === 27) {
      this._hide();
    }
  }
});

module.exports = PopoverTrigger;
