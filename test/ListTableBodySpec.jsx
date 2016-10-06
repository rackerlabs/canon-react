import { shallow } from 'enzyme';
import ListTableBody from '../transpiled/ListTableBody';

describe('ListTableBody', () => {
  let listTableBody;

  const DummyRow = ({ instance }) => (<div>{ instance.name }</div>);
  const collection = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' }
  ];

  beforeEach(() => {
    listTableBody = shallow(
      <ListTableBody collection={ collection }>
        <DummyRow />
      </ListTableBody>
    );
  });

  it('wraps the data in a tbody', () => {
    expect(listTableBody.type()).toEqual('tbody');
  });

  it('duplicates the child for each object in the collection', () => {
    expect(listTableBody.find(DummyRow).length).toBe(2);
  });

  it('passes the objects in the collection as the instance property of the children', () => {
    expect(listTableBody.find(DummyRow).at(0).prop('instance')).toBe(collection[0]);
    expect(listTableBody.find(DummyRow).at(1).prop('instance')).toBe(collection[1]);
  });

  it('passes the id of the objects in the collection to the children', () => {
    expect(listTableBody.find(DummyRow).at(0).key()).toBe('1');
    expect(listTableBody.find(DummyRow).at(1).key()).toBe('2');
  });

  it('passes the id of the objects in the collection to the children in a prop they can access', () => {
    expect(listTableBody.find(DummyRow).at(0).prop('rowKey')).toBe(1);
    expect(listTableBody.find(DummyRow).at(1).prop('rowKey')).toBe(2);
  });

  it('generates the key via the passed keyGenerator', () => {
    listTableBody = shallow(
      <ListTableBody collection={ collection } keyGenerator={ (instance) => (instance.name) }>
        <DummyRow />
      </ListTableBody>
    );

    expect(listTableBody.find(DummyRow).at(0).key()).toBe('one');
    expect(listTableBody.find(DummyRow).at(1).key()).toBe('two');
  });
});
