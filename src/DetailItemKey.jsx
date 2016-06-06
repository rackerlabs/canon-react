import React from 'react';
import classnames from 'classnames';

class DetailItemKey extends React.Component {
  render() {
    return (
      <div {...this.props} className={ classnames('rs-detail-key', this.props.className) }>
        {this.props.children}
      </div>
    );
  }
}

DetailItemKey.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailItemKey;
