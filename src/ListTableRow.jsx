import { PropTypes } from 'react';

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
  instance: PropTypes.object
};

export default ListTableRow;
