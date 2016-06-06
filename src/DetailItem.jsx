import React from 'react';
import classnames from 'classnames';

class DetailItem extends React.Component {
  render() {
    return (
      <li {...this.props} className={ classnames('rs-detail-item', this.props.className) }>
        {this.props.children}
      </li>
    );
  }
}

DetailItem.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailItem;
