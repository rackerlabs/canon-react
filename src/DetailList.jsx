import React from 'react';
import classnames from 'classnames';

class DetailList extends React.Component {
  render() {
    return (
      <ul {...this.props} className={classnames('rs-detail-list', this.props.className) }>
        {this.props.children}
      </ul>
    );
  }
}

DetailList.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string
};

export default DetailList;
