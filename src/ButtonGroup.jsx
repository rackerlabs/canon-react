import React from 'react';

class ButtonGroup extends React.Component {
  render() {
    let classes;

    classes = ['rs-btn-group'];
    if (this.props.className) {
      classes.push(this.props.className);
    }

    return (
      <div {...this.props} className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  children: React.PropTypes.element.isRequired,
  className: React.PropTypes.array
};

export default ButtonGroup;
