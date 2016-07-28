import { shallow } from 'enzyme';
import StatusColumnHeader from '../transpiled/StatusColumnHeader';

describe('StatusColumnHeader', () => {
  it('renders correctly', () => {
    const header = shallow(
      <StatusColumnHeader />
    );

    expect(header.type()).toBe('th');
    expect(header.hasClass('rs-table-status')).toBe(true);
  });

  it('adds the supplied className', () => {
    const header = shallow(
      <StatusColumnHeader className="test-class" />
    );

    expect(header.hasClass('test-class')).toBe(true);
  });
});
