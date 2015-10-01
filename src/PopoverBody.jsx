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

PopoverBody.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default PopoverBody;
