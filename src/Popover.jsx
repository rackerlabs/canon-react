import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Tether from 'tether';
import PopoverBackground from './PopoverBackground';
import classNames from 'classnames';

const PLACEMENT = {
  'left': {
    attachment: 'top right',
    targetAttachment: 'middle left',
    offset: '38px 20px'
  },
  'bottom-left': {
    attachment: 'top right',
    targetAttachment: 'bottom left',
    offset: '-20px -45px'
  },
  'bottom-right': {
    attachment: 'top left',
    targetAttachment: 'bottom right',
    offset: '-20px 45px'
  },
  'right': {
    attachment: 'top left',
    targetAttachment: 'middle right',
    offset: '38px -20px'
  },
  'center': {
    attachment: 'middle center',
    targetAttachment: 'middle center',
    targetModifier: 'visible'
  }
};

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
    this.props.isOpen ? this._show() : this._hide();
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
    ReactDOM.render(
      <PopoverBackground isModal={ this.props.isModal } onRequestClose={ this.props.onRequestClose } />,
      this._backgroundDiv
    );

    let containerClasses = this._containerDiv.className.split(' ');
    this._containerDiv.className = classNames(
      containerClasses,
      {
        'rs-popover': containerClasses.indexOf('rs-popover') < 0
      }
    );

    if (!this._tether) {
      this._tether = this._createTether(this._getTetherConfig());
    }
    popover = React.cloneElement(
      React.Children.only(this.props.children),
      {
        placement: this.props.placement
      }
    );

    // render the subtree into a container so the popover will receive the context from the parent
    this._popoverNode = ReactDOM.unstable_renderSubtreeIntoContainer(this, popover, this._containerDiv);

    this._tether.position();
  }

  // This is a seam for testing
  _createTether(tetherConfig) {
    return new Tether(tetherConfig);
  }

  _getTetherConfig() {
    let tetherConfig = PLACEMENT[this.props.placement] || PLACEMENT['right'];

    if (this.props.tetherConfig) {
      tetherConfig = Object.assign(tetherConfig, this.props.tetherConfig);
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
  children: PropTypes.element.isRequired,
  isModal: PropTypes.bool,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  placement: PropTypes.oneOf(Object.keys(PLACEMENT)),
  target: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  tetherConfig: PropTypes.object
};

export default Popover;
