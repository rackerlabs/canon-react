import React from 'react';

class PopoverBackground extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style;

    style = {
      'position': 'fixed',
      'left': 0,
      'top': 0,
      'width': '100%',
      'height': '100%',
      'zIndex': 999
    };

    return (<div className='rs-popover-background-overlay' onClick={this.props.onRequestClose} style={style}></div>);
  }
}

PopoverBackground.propTypes = {
  onRequestClose: React.PropTypes.func
};

export default PopoverBackground;
