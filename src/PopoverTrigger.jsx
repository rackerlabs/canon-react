var Tether = require('tether');

var PopoverTrigger = React.createClass({

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
    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
    }
    if (this._popoverNode) {
      React.unmountComponentAtNode(this._containerDiv);
      this._popoverNode = null;
    }
  },

  _show: function () {
    this._renderPopover();
    this.setState({ isPopoverDisplayed: true});
  },

  _renderPopover: function () {
    this.popover = React.cloneElement(
      this.props.popover,
      { hideCallback: this._hide }
    );
    this._popoverNode = React.render(this.popover, this._containerDiv);
    this._tether = this._createTether({
      element: React.findDOMNode(this._containerDiv),
      target: React.findDOMNode(this.getDOMNode()),
      attachment: 'middle left',
      targetAttachment: 'middle right',
      targetOffset: '-35px 20px'
    });
  },

  _createTether: function (tetherConfig) {
    return new Tether(tetherConfig);
  }
});

module.exports = PopoverTrigger;
