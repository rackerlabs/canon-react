import React from 'react';

const ListTableRow = (props) => (
  <tr { ...props }>{ cloneChildren(props) }</tr>
);

const cloneChildren = (props) => {
  const { children, instance } = props;

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { instance });
  });
};

ListTableRow.propTypes = {
  instance: React.PropTypes.object,
  rowKey: React.PropTypes.string
};

export default ListTableRow;
