import { shallow } from 'enzyme';
import ListTableRow from '../transpiled/ListTableRow';

describe('ListTableRow', () => {
  let row, instance;

  beforeEach(() => {
    instance = { id: 'abcde-12345', name: 'howdy' };
    row = shallow(
      <ListTableRow data-model_id="abcde-12345" instance={ instance }>
        <td className="id">{ instance.id }</td>
        <td className="name">{ instance.name }</td>
      </ListTableRow>
    );
  });

  it('renders a root tr element', () => {
    expect(row.type()).toBe('tr');
  });

  it('adds the unknown props to the root element', () => {
    expect(row.props()['data-model_id']).toBe('abcde-12345');
  });

  it('adds the children with the instance property', () => {
    expect(row.children().length).toEqual(2);
    expect(row.childAt(0).props().instance).toEqual(instance);
    expect(row.childAt(1).props().instance).toEqual(instance);
  });
});
