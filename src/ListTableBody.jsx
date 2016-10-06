import React from 'react';

class ListTableBody extends React.Component {
  constructor() {
    super();

    this._cloneRow = this._cloneRow.bind(this);
  }

  render() {
    return (
      <tbody>
        { this._cloneRowPerInstance() }
      </tbody>
    );
  }

  _cloneRowPerInstance() {
    return this.props.collection.map(this._cloneRow);
  }

  _cloneRow(instance, index, array) {
    const key = this.props.keyGenerator(instance, index, array);
    return React.cloneElement(this.props.children, {
      instance: instance,
      key: key,
      rowKey: key
    });
  }
}

ListTableBody.defaultProps = {
  keyGenerator: (instance) => (instance.id)
};

ListTableBody.propTypes = {
  children: React.PropTypes.element.isRequired,
  collection: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  keyGenerator: React.PropTypes.func
};

export default ListTableBody;
