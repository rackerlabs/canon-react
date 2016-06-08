import React from 'react';
import classnames from 'classnames';

class DetailItemValue extends React.Component {
  render() {
    return (
      <div {...this.props} className={ classnames('rs-detail-value', this.props.className) }>
        {this.props.children}
      </div>
    );
  }
}

DetailItemValue.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailItemValue;
