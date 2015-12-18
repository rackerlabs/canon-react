import React from 'react';

class PopoverBody extends React.Component {

  render() {
    let classes;

    classes = ['rs-popover-body', this.props.className];
    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

export default PopoverBody;
