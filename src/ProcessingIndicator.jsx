import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class ProcessingIndicator extends React.Component {
  render() {
    let classes;

    classes = classNames(
      'rs-processing-indicator',
      { 'rs-hidden': this.props.hidden }
    );

    return (
      <i className={ classes }></i>
    );
  }
}

ProcessingIndicator.propTypes = {
  hidden: PropTypes.bool
};

ProcessingIndicator.defaultProps = {
  hidden: true
};

export default ProcessingIndicator;
