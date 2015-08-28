import React from 'react';

class ProcessingIndicator extends React.Component {

  render() {
    let classes;

    classes = 'rs-processing-indicator';

    if (this.props.hidden) {
      classes += ' rs-hidden';
    }

    return (
      <i className={classes}></i>
    );
  }
}

ProcessingIndicator.propTypes = {
  hidden: React.PropTypes.bool
};

ProcessingIndicator.defaultProps = {
  hidden: true
};

export default ProcessingIndicator;
