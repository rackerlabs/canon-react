import React from 'react';
import ReactDOM from 'react-dom';
import Tether from 'tether';

const PLACEMENT = {
 'left': {
    attachment: 'middle right',
    targetAttachment: 'middle left'
  },
 'bottom-left': {
    attachment: 'top right',
    targetAttachment: 'bottom left'
  },
 'top-left': {
    attachment: 'bottom right',
    targetAttachment: 'top left'
  },
 'top': {
    attachment: 'bottom middle',
    targetAttachment: 'top middle'
  },
 'bottom': {
    attachment: 'top middle',
    targetAttachment: 'bottom middle'
  },
 'right': {
    attachment: 'middle left',
    targetAttachment: 'middle right'
  },
 'top-right': {
    attachment: 'bottom left',
    targetAttachment: 'top right'
  },
 'bottom-right': {
    attachment: 'top left',
    targetAttachment: 'bottom right'
  }
};

class TooltipTrigger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTooltipOpen: false,
      isMouseInTooltip: false
    };

    this._mouseEnteringTooltip = this._mouseEnteringTooltip.bind(this);
    this._mouseLeavingTooltip = this._mouseLeavingTooltip.bind(this);
    this._showTooltipOnInterval = this._showTooltipOnInterval.bind(this);
    this._hideTooltipOnInterval = this._hideTooltipOnInterval.bind(this);
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
      ReactDOM.unmountComponentAtNode(this._containerDiv);
      this._tooltipNode = null;
    }
  }

  _showTooltip() {
    this._containerDiv.className += ' visible';

    // render the subtree into a container so the popover will receive the context from the parent
    this._tooltipNode = ReactDOM.unstable_renderSubtreeIntoContainer(this, (
      <div className='rs-tooltip-inner'
        onMouseOver={ this._mouseEnteringTooltip }
        onMouseLeave={ this._mouseLeavingTooltip }>
        { this.props.content }
      </div>
    ), this._containerDiv);

    if (!this._tether) {
      this._tether = this._createTether(this._getTetherConfig());
    }
  }

  _createTether(tetherConfig) {
    return new Tether(tetherConfig);
  }

  _getTetherConfig() {
    let tetherConfig = PLACEMENT[this.props.placement] || PLACEMENT['bottom-right'];

    tetherConfig.targetModifier = 'visible';
    tetherConfig.element = ReactDOM.findDOMNode(this._containerDiv);
    tetherConfig.target = this._getTarget();
    tetherConfig.constraints = [
      { to: 'window', pin: true, attachment: 'together' }
    ];

    return tetherConfig;
  }

  render() {
    return React.cloneElement(
      React.Children.only(this.props.children),
      {
        onMouseOver: this._showTooltipOnInterval,
        onMouseLeave: this._hideTooltipOnInterval,
        onFocus: showTooltipfunc,
        onBlur: hideTooltipFunc,
        ref: 'trigger'
      }
    );
  }

  _showTooltipOnInterval() {
    if (this._hideTimer) {
      clearInterval(this._hideTimer);
    }
    this._showTimer = setTimeout(() => { this.setState({ isTooltipOpen: true}); }, 200);
  }

  _hideTooltipOnInterval() {
    if (this._showTimer) {
      clearInterval(this._showTimer);
    }
    this._hideTimer = setTimeout(() => { this.setState({ isTooltipOpen: false }); }, 200);
  }

  _shouldShowTooltip() {
    return this.state.isTooltipOpen || this.state.isMouseInTooltip;
  }

  _getTarget() {
    return ReactDOM.findDOMNode(this.refs.trigger);
  }

  _mouseLeavingTooltip() {
    this._hideOnLeavingTooltipTimer = setTimeout(() => { this.setState({ isMouseInTooltip: false }); }, 250);
  }

  _mouseEnteringTooltip() {
    if (this._hideOnLeavingTooltipTimer) {
      clearInterval(this._hideOnLeavingTooltipTimer);
    }
    this.setState({ isMouseInTooltip: true });
  }
}

TooltipTrigger.propTypes = {
  content: React.PropTypes.node.isRequired,
  placement: React.PropTypes.oneOf(Object.keys(PLACEMENT))
};

TooltipTrigger.defaultProps = {
  placement: 'bottom-right'
};

export default TooltipTrigger;
