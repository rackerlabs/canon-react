import React from 'react';

export default class ErrorIndicator extends React.Component {
  render() {
    return this.props.value ? (
      <div className="rs-status-error">
        {this.props.value}
      </div>
    ) : null;
  }
}

ErrorIndicator.propTypes = {
  value: React.PropTypes.node
};
