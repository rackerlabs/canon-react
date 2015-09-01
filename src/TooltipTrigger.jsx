import React from 'react';
import Tooltip from './Tooltip';

class TooltipTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTooltipOpen: false
    };
  }

  render() {
    let triggerProps;

    triggerProps = {
      onMouseOver: (e) => { this._showTooltip() },
      onMouseOut: () => { this._hideTooltip() },
      ref: 'trigger'
    };

    this._trigger = React.cloneElement(React.Children.only(this.props.children), triggerProps);

    return (
      <div>
        {this._trigger}
        <Tooltip isOpen={this.state.isTooltipOpen} target={this._getTarget.bind(this)}>
          {this.props.content}
        </Tooltip>
      </div>
    );
  }

  _getTarget() {
    return React.findDOMNode(this.refs.trigger);
  }

  _showTooltip(e) {
    this.setState({isTooltipOpen: true});
  }

  _hideTooltip() {
    this.setState({isTooltipOpen: false});
  }
}

// TooltipTrigger.propTypes = {
//   content: React.PropTypes.node.isRequired
// };

export default TooltipTrigger;
