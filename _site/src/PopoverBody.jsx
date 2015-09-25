import React from 'react';

class PopoverBody extends React.Component {

  render() {
    return (
      <div className='rs-popover-body'>
        {this.props.children}
      </div>
    );
  }
}

export default PopoverBody;
